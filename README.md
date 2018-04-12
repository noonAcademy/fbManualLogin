## fbManualLogin
Manual Login Facebook implementation using FB npm module

NPM module - https://www.npmjs.com/package/fb <br />
Facebook manual flow documentation - https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow

### How it works:
 
* Imported FB with npm module, Facebook app id, and app secret in config aka socialAuth.js file.
* When user click on facebook button in UI it will call, get('/facebook') route in facebookRoute.js
* getFaceBookLoginUrl in socialAuth.js will return a URL which will be used to redirect user by facebookRoute.
* It will go to get('callback/facebook') to get the permission from user using facebookWebValidate function which will return back the user's access_token from facebook.
* Using access_token we can call facebook's Graph API to get user data and play with it.

Have fun !!
