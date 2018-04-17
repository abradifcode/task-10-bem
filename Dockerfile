# Build:
# docker build --no-cache -t task-10-bem .

# Run:
# docker run -d -p 3001:3001 --rm task-10-bem

FROM node:8

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN npm i --production

EXPOSE 3000

CMD node index.js
