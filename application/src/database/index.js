import Sequelize from 'sequelize';

import * as databaseConfigCjs from '../config/database.cjs';
import User from '../app/models/User.js';
import Task from '../app/models/Task.js';

const resolvedConfig = databaseConfigCjs.default || databaseConfigCjs;

const models = [User, Task];

class Database {
  constructor() {
    this.init();
  }

  init() {
   
    this.connection = new Sequelize(resolvedConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();