// https://www.npmjs.com/package/fb

var FB = require('fb');

var config = {    
  'noon_academy': {        
    app_id: process.env.FACEBOOK_APP_ID,
            app_secret: process.env.FACEBOOK_APP_SECRET,
            callback: process.env.FACEBOOK_CALLBACK_URL,
    scope: 'email, public_profile'    
  }
};

exports.facebookAuthApi = (app_name) => {    
  if (!app_name) app_name = 'noon_academy';    
  try {        
    var fb = FB.extend({        
      appId: config[app_name].app_id,
      appSecret: config[app_name].app_secret        
    });        
    return fb;    
  } catch (e) {        
    console.log("error in facebook connection", e)    
  }
}


exports.getFaceBookLoginUrl = (body_data, query_data) => {  
  if (!body_data.app_name) app_name = 'noon_academy';
  var url = config[app_name].callback;
  url += serialize(query_data);
  var loginUrl = FB.getLoginUrl({
    client_id: config[app_name].app_id,
    redirect_uri: url,
    scope: config[app_name].scope
  });
  return loginUrl;
}

exports.facebookWebValidate = (data) => {
  if (!data.app_name) app_name = 'noon_academy';
  var url = config[app_name].callback;
  url += serialize(data);
  var api_data = {
    client_id: config[app_name].app_id,
    client_secret: config[app_name].app_secret,
    redirect_uri: url
  }
  return api_data;
}

function serialize(options) {
  var stringUrl = [];
  for (var option in options) {
    if (options.hasOwnProperty(option)) {
      stringUrl.push(encodeURIComponent(option) + "=" + encodeURIComponent(options[option]));
    }
  }
  if (stringUrl.length)
    return '?' + stringUrl.join("&");
  else
    return '';
}
