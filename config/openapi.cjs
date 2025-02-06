const { execSync } = require('node:child_process');
const fs = require('fs');
const host = process.argv[2];

// 아래의 그룹 세팅
const GROUP_GENERATOR_URLS = [
  'member-group',
];

const startDate = new Date();
const startSeconds = startDate.getTime() / 1000;

console.log('START TIME ::: ', startSeconds);
const apiFileWriteHandler = (error) => {
  if (!error) {
    console.log('::: CREATE GENERATOR API FILE SUCCESS :::');
  }
};
const axios = require('axios');
const generator = async () => {
  for (let group of GROUP_GENERATOR_URLS) {
    let request =
      'openapi-generator-cli generate -i ' +
      host +
      '/v3/api-docs/' +
      group +
      ' -g typescript-axios -o ./src/restapi -c ./openapitools.json --global-property skipFormModel=false --skip-validate-spec';
    await execSync(request);

    const date = new Date();
    const groupSeconds = date.getTime() / 1000;

    console.log('GROUP NAME(' + group + ') END TIME ::: ', groupSeconds - startSeconds);
  }

  const endDate = new Date();
  const endSeconds = endDate.getTime() / 1000;
  console.log('END TIME ::: ', endSeconds - startSeconds);
};

generator().then(() => execSync('yarn run assist'));

const makeFile = async () => {
  for (let group of GROUP_GENERATOR_URLS) {
    await axios.get(host + '/api/v3/api-docs/' + group).then((result) => {
      fs.writeFile(
        './src/restapi/json/' + group + '.json',
        JSON.stringify(result.data),
        'utf8',
        apiFileWriteHandler,
      );
    });
  }
};

makeFile().then(() => {
  console.log('MAKE FILE SUCCESS');
});
