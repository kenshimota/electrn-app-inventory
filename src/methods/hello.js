const sleep = require('../../utils/sleep');

const Hello = {
  // el method-name es su numero de llamada
  'method-name': function (params) {
    console.log(params);
    // lo que va hacer durante que esta dentro del siguiente metodo
  },

  // method added
  'hello-app': async function () {
    const text = 'hello app';
    await sleep(2000);
    console.log(text);
    return text;
  },
};

module.exports = Hello;
