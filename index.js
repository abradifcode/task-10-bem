const express = require('express')
const useragent = require('express-useragent')
const app = express();
const port = process.env.PORT || 3001;
const staticDir = __dirname + '/build/'

app.use(useragent.express());

app.get('/', (req, res, next) => {
  const uaData = req.useragent;

  let ua = 'desktop';
  const uaSet = {
    mob: uaData.isMobile,
    tablet: uaData.isTablet,
    desk: uaData.isDesktop,
  };

  if (uaSet.tablet) {
    ua = 'tablet';
  }
  else if (uaSet.mob) {
    ua = 'mobile';
  }

  var fileName = `${ua}.html`;
  var options = {
    root: staticDir
  };

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
})

app.use(express.static(staticDir));
app.use(errorHandler);

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}

app.listen(port, () => console.log(`Example app listening on ${port}!`))
