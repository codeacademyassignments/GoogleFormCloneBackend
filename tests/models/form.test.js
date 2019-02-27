const model = require('../../models');

afterAll(async () => {
  await model.sequelize.close();
});

describe('Form', () => {
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
