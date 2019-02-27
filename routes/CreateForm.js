const formHelper = require('../helper/form');
const validationObject = require('../validationObject');

module.exports = {
  path: '/form',
  method: 'POST',
  config: {
    cors: true,
    // payload: {
    //   allow: 'application/json',
    //   output: 'data',
    //   parse: true,
    // },
    // validate: {
    //   payload: validationObject,
    // },
  },
  handler: async (request, h) => {
    console.log(Object.keys(request.payload));
    console.log(request.payload.formName, request.payload.fields);
    const result = await formHelper.createForm(request.payload.formName, request.payload.fields);
    return result;
  },
};
