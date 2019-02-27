

module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    formName: DataTypes.STRING,
  }, {});
  // Form.associate = function(models) {

  // };
  Form.generate = formName => Form.create({
    formName,
  });
  return Form;
};
