(function(){
  'use strict';

  angular.module('demo.rtcpeerconnection', ['ui.router', 'hljs', 'ac.angular-webrtc'])
  .config(['$stateProvider', 'hljsServiceProvider', function($stateProvider, hljsServiceProvider){
    $stateProvider.state('rtcpeerconnection', {
      url: '/rtcpeerconnection',
      templateUrl: 'RtcPeerConnection/templates/rtcpeerconnection.template.html',
      controller: 'RtcPeerConnectionCtrl',
      controllerAs: 'rtcpeerconnection'
    });

    hljsServiceProvider.setOptions({
      tabReplace: '  '
    });
  }]);
})();