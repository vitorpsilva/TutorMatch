FROM node:8.11.3-jessie

ADD . /tutormatch_batch/
WORKDIR /tutormatch_batch
EXPOSE 3000
VOLUME ["/tutormatch_back"]
RUN apt-get update -y \
    && apt-get -y install software-properties-common \
    && add-apt-repository ppa:jonathonf/backports \
    && apt-get -y install sqlite3 libsqlite3-dev \
    && rm -Rf node_modules \
    && npm install nodemon -g \
    && npm install \
    && 
    # && wget https://www.sqlite.org/snapshot/sqlite-snapshot-201807272333.tar.gz \
    # && ls -la \
    # && chmod 777 sqlite-snapshot-201807272333.tar.gz \
    # && ls -la \
    # && tar -xvf ./sqlite-snapshot-201807272333.tar.gz -C /usr/local \
    # && ls -la /usr/local \
    # && cd /usr/local/sqlite-snapshot-201807272333 \
    # && ./configure --prefix =/usr/local \
    # && make \
    # && make install \
    # && cd /tutormatch_batch \
# CMD ["npm", "install"]

# RUN nodemon --exec npm start