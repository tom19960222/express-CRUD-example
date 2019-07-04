// 對一種物件 (ex: 產品) 的資料庫操作都放在這邊

class ExampleAction {
  constructor(options) {
    this.db = options.db; // 初始化後的 knex
  }

  async find() {
    return this.db('example').select();
  }

  async create(data) {
    return this.db('example').insert(data);
  }
}

module.exports = ExampleAction;
