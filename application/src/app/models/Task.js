import Sequelize from 'sequelize';
const { Model } = Sequelize; // Extrai o Model do pacote importado

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        task: Sequelize.STRING,
        check: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Task;