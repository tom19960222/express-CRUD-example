// 所有對外的 API 都放在這邊

class ExampleMiddleware {
  constructor(options) {
    this.action = options.action; // 在 index.js 裡面初始化好的 action
  }

  findExample() {
    return async (req, res) => {
      const result = await this.action.find();
      return res.status(200).json(result);
    }
  }

  createExample() {
    return async (req, res) => {
      const data = req.body;
      const result = await this.action.create(data);
      return res.status(201).json(result);
    }
  }
}

module.exports = ExampleMiddleware;
