FROM ubuntu
RUN apt-get update
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt-get install -y nodejs
WORKDIR /opt/node-app
COPY . /opt/node-app/
CMD ["node", "index.js"]