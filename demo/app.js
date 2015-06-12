(function(){
  'use strict';

  angular.module('demo', ['ac.angular-webrtc', 'demo.home', 'demo.rtcusermedia', 'demo.rtcpeerconnection', 'demo.rtcmedia'])
  .config(['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  }]);
})();