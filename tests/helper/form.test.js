const { getAllForms } = require('../../helper/form');
const model = require('../../models');


afterAll(async () => {
  await model.sequelize.close();
});
describe('getAllForms', () => {
  it('should return all forms available in database', async () => {
    const forms = await model.Form.getAllForms();
    expect(await getAllForms()).toEqual(forms);
  });
});
