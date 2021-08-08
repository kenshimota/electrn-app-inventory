const sleep = require('../../utils/sleep');

const Hello = {
  // el method-name es su numero de llamada
  'method-name': async function (params) {
    await sleep(3000);
    throw 'error de erik';
    // lo que va hacer durante que esta dentro del siguiente metodo
  },

  // method added
  'hello-app': async function () {
    const text = 'hello app';
    await sleep(2000);
    return text;
  },
};

module.exports = Hello;
