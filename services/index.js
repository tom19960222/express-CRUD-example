const ExampleService = require('./example');

const setupServices = (app) => {
  const exampleService = new ExampleService({ app, db: app.knex });
}

exports.setupServices = setupServices;
// 與 module.exports.setupModules = setupModules 等價