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

    for app in bsObj.findAll("div",{"class","people"}):
        if(app.find("div",{"class","info"})):
            try:
                picture = re.split('\((.*?)\)', app.attrs['style'])[1]
                picture2 = 'https://www.intersection.ventures/' + picture[1:len(picture) - 1]
                print(picture2)
                name = app.find("h4").get_text()
                print(name)
                if app.find("p",{"class","title"}) not in app:
                    title = app.find("p").get_text()
                else:
                    title = app.find("p",{"class","title"}).get_text()
                print(title)
                contact = app.find("a", {"class", "linkedin"}).attrs['href']
                print(contact)
                data = (
                    randint(100, 900), title, name, contact, picture2, datetime.now(timezone.utc),
                    datetime.now(timezone.utc));
                c.execute('insert into tutors values (?,?,?,?,?,?,?)', data)
            except AttributeError:
                print('This page is missing something! Continuing.')
    conn.commit()
    conn.close()


if __name__ == "__main__":
    main()
