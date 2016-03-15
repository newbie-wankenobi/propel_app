

module.exports = {
  welcome: welcome,
  test: test
};


function welcome(req, res, next) {
  res.render('pages/welcome');
};

function test(req, res, next) {
  res.render('pages/test');
}
