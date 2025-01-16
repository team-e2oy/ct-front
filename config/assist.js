const fs = require('fs');
const apis = fs.readdirSync('./src/restapi/api');
const models = fs.readdirSync('./src/restapi/models');

const apiFileRemoveHandler = (error) => {
  if (!error) {
    fs.open('./src/restapi/api.ts', 'w', apiFileCreateHandler);
  }
};

const apiFileCreateHandler = (error) => {
  if (!error) {
    let apiText = apis
      .map((item) => {
        return "export * from './api/" + item.replace(/.ts/g, '') + "';";
      })
      .join('\n');

    fs.writeFile('./src/restapi/api.ts', apiText, 'utf8', apiFileWriteHandler);
  }
};

const apiFileWriteHandler = (error) => {
  if (!error) {
    console.log('::: CREATE GENERATOR API FILE SUCCESS :::');
  }
};

fs.unlink('./src/restapi/api.ts', apiFileRemoveHandler);

const modelFileRemoveHandler = (error) => {
  if (!error) {
    fs.open('./src/restapi/models/index.ts', 'w', modelFileCreateHandler);
  }
};

const modelFileCreateHandler = (error) => {
  if (!error) {
    let modelText = models
      .map((item) => {
        return "export * from './" + item.replace(/.ts/g, '') + "';";
      })
      .join('\n');

    fs.writeFile('./src/restapi/models/index.ts', modelText, 'utf8', modelFileWriteHandler);
  }
};

const modelFileWriteHandler = (error) => {
  if (!error) {
    console.log('::: CREATE GENERATOR MODELS FILE SUCCESS :::');
  }
};

fs.unlink('./src/restapi/models/index.ts', modelFileRemoveHandler);
