const server = require('../../server');

describe('server', () => {
  it('should reply with pong', async () => {
    const startServer = await server.inject({
      method: 'GET',
      url: '/ping',
    });
    expect(startServer.result).toEqual('pong');
  });
});
