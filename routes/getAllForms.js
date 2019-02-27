const formHelper = require('../helper/form');

module.exports = {
  path: '/forms',
  method: 'GET',
  config: {
    cors: true,
  },
  handler: async (request, h) => {
    const forms = await formHelper.getAllForms();
    console.log(forms);
    return h.response(forms);
  },
};
