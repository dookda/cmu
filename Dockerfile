FROM alpine
RUN apk add git
RUN apk add --update nodejs npm 
RUN npm i -g nodemon
RUN cd /mnt/ && \
    git clone https://github.com/dookda/nodejs.git && \
    cd nodejs && \
    npm i
WORKDIR /mnt/
