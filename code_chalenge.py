# IMPORT LIBRARIES


import requests
from bs4 import BeautifulSoup
import re
import sqlite3
from datetime import datetime, timezone
from random import randint


def main():
    site = 'https://www.intersection.ventures'
    page = requests.get(site)
    bsObj = BeautifulSoup(page.text.encode('ISO-8859-1'), "html.parser")
    conn = sqlite3.connect('./tutormatch_back/tutormatch.sqlite')
    c = conn.cursor()

    apps = bsObj.findAll("div", {"class", "people"})

    print("Numeros de APP`s encontrados: ", len(apps))

    count = 0

    for app in apps:
        count += 1
        if count < 12:
            picture = re.split('\((.*?)\)', app.attrs['style'])[1]
            picture2 = picture[1:len(picture) - 1]
            print(picture[1:len(picture) - 1])
            name = app.find("h4").get_text()
            print(app.find("h4").get_text())
            title = app.find("p", {"class", "title"}).get_text()
            print(app.find("p", {"class", "title"}).get_text())
            contact = app.find("a", {"class", "linkedin"}).attrs['href']
            print(app.find("a", {"class", "linkedin"}).attrs['href'])

            data = (
            randint(100, 900), title, name, contact, picture2, datetime.now(timezone.utc), datetime.now(timezone.utc));

            c.execute('insert into tutors values (?,?,?,?,?,?,?)', data)

    conn.commit()
    conn.close()

if __name__ == "__main__":
    main()
