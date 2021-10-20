// routes/hello-hapi.js
module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'hapi';
    }
  }
]