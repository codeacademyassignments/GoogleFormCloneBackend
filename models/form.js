

module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    formName: DataTypes.STRING,
    fields: DataTypes.STRING,
  }, {});
  // Form.associate = function(models) {

  // };
  Form.generate = formName => Form.create({
    formName,
  });

  Form.getAllForms = () => Form.findAll({
    attributes: ['formName', 'createdAt'],
  });

  Form.createFormWithFields = (formName, fieldArray) => {
    console.log(fieldArray);
    const fields = fieldArray.join(',');
    console.log(fields);
    return Form.create({
      formName,
      fields,
    });
  };
  return Form;
};
