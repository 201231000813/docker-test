FROM node

RUN mkdir -p /app/node
WORKDIR /app/node

COPY ./package.json .
RUN npm install

COPY . /app/node
ENV MY_PROJECT_REDIS_URI="redis://redis" MY_PROJECT_MONGODB_URI="mongodb://mongo:27017/test"

EXPOSE 3333
CMD ["npm", "start"]