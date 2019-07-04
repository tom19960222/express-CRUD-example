const Action = require('./action');
const Middleware = require('./middleware');

class ExampleService {
  constructor(options) {
    this.db = options.db; // 初始化後的 knex
    this.action = new Action({ db: this.db });

    const app = options.app; // 初始化後的 Express
    const middleware = new Middleware({ action: this.action });

    app.get('/example', middleware.findExample());
    app.post('/example', middleware.createExample());
  }
}

module.exports = ExampleService;
