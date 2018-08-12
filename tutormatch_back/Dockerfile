FROM node:8.11.3-jessie

ADD . /tutormatch_batch
WORKDIR /tutormatch_batch
EXPOSE 3000
VOLUME ["/tutormatch_back"]
RUN apt-get update -y \
    && apt-get -y install software-properties-common \
    && add-apt-repository ppa:jonathonf/backports \
    && apt-get -y install sqlite3 libsqlite3-dev \
    && rm -Rf node_modules \
    && npm install nodemon -g \
    && npm install
ENTRYPOINT [ "nodemon", "--exec", "npm", "start"]