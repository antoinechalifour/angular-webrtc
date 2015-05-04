(function(){
  'use strict';

  angular.module('demo', ['ac.angular-webrtc', 'demo.home', 'demo.rtcusermedia', 'demo.rtcpeerconnection'])
  .config(['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  }]);
})();