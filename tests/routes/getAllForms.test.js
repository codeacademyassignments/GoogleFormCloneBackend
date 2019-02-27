const server = require('../../server');

describe('server', () => {
  it('should reply with array of forms', async () => {
    const startServer = await server.inject({
      method: 'GET',
      url: '/forms',
    });
    expect(Array.isArray(startServer.result)).toBe(true);
    expect(Object.keys(startServer.result[0].dataValues)).toEqual(['formName', 'createdAt']);
  });
});
