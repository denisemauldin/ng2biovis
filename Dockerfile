# To build and run with Docker:
#
#  $ docker build -t ng2biovis .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 ng2biovis
#
FROM node:latest

RUN mkdir -p /ng2biovis /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /ng2biovis
COPY package.json typings.json /ng2biovis/
RUN npm install --unsafe-perm=true

COPY . /ng2biovis
RUN chown -R nodejs:nodejs /ng2biovis
USER nodejs

CMD npm start
