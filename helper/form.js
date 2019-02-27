const model = require('../models');

const getAllForms = () => model.Form.getAllForms();

const createForm = (formName, fieldsArray) => model.Form.createFormWithFields(
  formName, fieldsArray,
);

module.exports = { getAllForms, createForm };
