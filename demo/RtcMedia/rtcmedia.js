(function(){
  'use strict';

  angular.module('demo.rtcmedia', ['ui.router', 'hljs', 'lumx', 'ac.angular-webrtc'])

  .config(['$stateProvider', 'hljsServiceProvider', function($stateProvider, hljsServiceProvider){
    $stateProvider.state('rtcmedia', {
      url: '/rtcmedia',
      templateUrl: 'RtcMedia/templates/rtcmedia.template.html',
      controller: 'RtcMediaCtrl',
      controllerAs: 'rtcmedia'
    });

    hljsServiceProvider.setOptions({
      tabReplace: '  '
    });
  }]);
})();