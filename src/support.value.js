(function(){
  'use strict';
  var support = false;
  if(navigator.mozGetUserMedia) support = 'firefox';
  else if(navigator.webkitGetUserMedia) support = 'chrome';

  angular.module('ac.angular-webrtc')
  .value('support', support);
})();