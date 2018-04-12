var express = require('express');
var router = express.Router();
let utils = require('./utils');
let socialLib = require('./socialAuth');

router.get('/facebook', function (req, res, next) {
    var loginUrl = socialLib.getFaceBookLoginUrl(req.body, req.query);
    res.redirect(loginUrl);
});

    router.get('/callback/facebook', (req, res, next) => {
        var facebookData = socialLib.facebookWebValidate(req.query);
        var facebook = socialLib.facebookAuthApi(req.query.app_name);
        facebook.api('oauth/access_token', {
          client_id: facebookData.client_id,
          client_secret: facebookData.client_secret,
          redirect_uri: facebookData.redirect_uri,
          code: req.query.code
        }, function(result) {
          if (!result || result.error) {
            status = error.status;
            delete err.status;
            res.redirect(process.env.SOCIAL_LOGIN_REDIRECT_URL+'?login='+error.message);
          } else {
              var process_data = result;
              process_data.logTag = generateId();
              process_data.user_role = facebookData.redirect_uri[utils.nextCharacterAfterMatch('user_role=',facebookData.redirect_uri)]
              process_data.country_id = facebookData.redirect_uri[utils.nextCharacterAfterMatch('country=',facebookData.redirect_uri)]

            //play with the process_data in your controller
            
            
          }
        });
      });

module.exports = router;
