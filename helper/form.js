const model = require('../models');

const getAllForms = () => model.Form.getAllForms();

module.exports = { getAllForms };
