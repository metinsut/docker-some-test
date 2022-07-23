FROM node
WORKDIR /spa-app
COPY . .
RUN npm install
RUN npm run build
RUN npm add -g live-server
CMD ["live-server", "--port=3000", "dist"]