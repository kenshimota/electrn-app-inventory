const { ipcRenderer } = require('electron');
let idp = 1;

const execute = function (name, params) {
  const ipcid = idp;
  idp += 1;

  setTimeout(ipcRenderer.send('asynchronous-execute-send', { name, params, idp: ipcid }), 10);
  return new Promise(resolve =>
    ipcRenderer.on('asynchronous-execute-response', (event, response) => {
      if (response.idp == ipcid) resolve(response);
    })
  );
};

module.exports = execute;
