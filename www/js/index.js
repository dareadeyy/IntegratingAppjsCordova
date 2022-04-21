App.controller('home', function (page) {
    // put stuff here
  });

  App.controller('tit', function (page) {
    // put stuff here
  });

  App.controller('per', function (page) {
    // put stuff here
  });

  App.controller('edu', function (page) {
    // put stuff here
  });

  App.controller('work', function (page) {
    // put stuff here
  });

  App.controller('dist', function (page) {
    // put stuff here
  });

  App.controller('vol', function (page) {
    // put stuff here
  });

  App.controller('mem', function (page) {
    // put stuff here
  });

  App.controller('ref', function (page) {
    // put stuff here
  });

  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }
