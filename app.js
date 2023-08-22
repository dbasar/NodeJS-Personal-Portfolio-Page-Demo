const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());

app.use(express.static('public', { index: false })); 


let urlArr = ['/',  
              '/about',
              '/contact',
              '/furniture',
              '/industrial-design',
              '/tr',
              '/tr/about',
              '/tr/contact',
              '/tr/furniture',
              '/tr/industrial-design',
              '/en',
              '/en/about',
              '/en/contact',
              '/en/furniture',
              '/en/industrial-design'];


app.get(urlArr, function(req, res) {

    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
    res.setHeader("Expires", "0"); // Proxies.

    if (req.originalUrl === '/' ||
        req.originalUrl === '/about' ||
        req.originalUrl === '/contact' ||
        req.originalUrl === '/furniture' ||
        req.originalUrl === '/industrial-design') {

      let language = req.cookies.oybLanguage;

      if (!language) {
        res.cookie('oybLanguage', '/tr');
        language = '/tr';
      }  

      if (req.originalUrl === '/') {
        res.redirect(301, language);
      } else {
        res.redirect(301, (language + req.originalUrl));
      }

    } else if (req.originalUrl === '/tr/' ||
               req.originalUrl === '/en/') {
      res.sendFile(__dirname + '/public' + req.originalUrl + '/index.html');

    } else {
      res.sendFile(__dirname + '/public' + req.originalUrl + '.html');
    }
});


app.listen(port);
console.log('Server started at http://localhost:' + port);