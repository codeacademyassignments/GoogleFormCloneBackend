const { getAllForms, createForm } = require('../../helper/form');
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

describe('createFormWithFields', () => {
  beforeEach(async () => {
    await model.Form.truncate();
  });
  it('should save the form with fields', async () => {
    await createForm('Personal Information', ['firstName', 'lastName']);
    expect(await model.Form.count({
      where: {
        formName: 'Personal Information',
        fields: 'firstName,lastName',
      },
    })).toEqual(1);
  });
});
