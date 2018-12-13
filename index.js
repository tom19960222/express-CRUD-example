const Express = require('express');
const bodyParser = require('body-parser');
const Knex = require('knex');

const config = require('./config');
const services = require('./services');

const app = Express();
app.knex = Knex(config.db); // 把初始化完的 knex 放進 app，方便使用
app.use(bodyParser.json());
services.setupServices(app);

app.listen(30300, () => {
  console.log('app started');
})