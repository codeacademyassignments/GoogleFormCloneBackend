const model = require('../../models');

afterAll(async () => {
  await model.sequelize.close();
});

describe('generate', () => {
  const formName = 'Feedback Form';
  beforeEach(async () => {
    await model.Form.truncate();
  });
  it('should create form entry with formName', async () => {
    await model.Form.generate(formName);
    expect(await model.Form.count({
      where: {
        formName,
      },
    })).toEqual(1);
  });
  it('should through error if form name already exist', async () => {
    await model.Form.generate(formName);
    await model.Form.generate(formName).catch((error) => {
      expect(error.message).toEqual('Validation error');
    });
    expect(await model.Form.count({
      where: {
        formName,
      },
    })).toEqual(1);
  });
});

describe('getAllForms', () => {
  beforeEach(async () => {
    await model.Form.truncate();
  });
  it('should return empty array when no entry in table ', async () => {
    expect(await model.Form.getAllForms()).toEqual([]);
  });
  it('should return two entry array with attributes formName and createdAt', async () => {
    const formNames = ['Feedback Form', 'Personal Details Form'];
    await model.Form.generate(formNames[0]);
    await model.Form.generate(formNames[1]);
    const forms = await model.Form.getAllForms();
    expect(forms.length).toEqual(2);
    expect(Object.keys(forms[0].dataValues)).toEqual(['formName', 'createdAt']);
  });
});

describe('createFormWithFields', () => {
  beforeEach(async () => {
    await model.Form.truncate();
  });
  it('should create Form with fields joined with separator', async () => {
    const fields = ['firstName'];
    const formName = 'StudentInfo';
    expect((await model.Form.createFormWithFields(formName, fields)).fields).toEqual('firstName');
  });
  it('should create Form with fields joined with separator', async () => {
    const fields = ['firstName', 'lastName', 'mobile', 'address', 'mobile', 'nickname'];
    const formName = 'StudentInfo';
    expect((await model.Form.createFormWithFields(formName, fields)).formName).toEqual('StudentInfo');
  });
});
