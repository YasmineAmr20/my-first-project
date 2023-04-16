FROM node
WORKDIR /user/app
COPY  package.json .
RUN npm install
COPY  . .
EXPOSE 2020
CMD ["node","index.js"]