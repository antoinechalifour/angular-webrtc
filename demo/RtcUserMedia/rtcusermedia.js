(function(){
  'use strict';

  angular.module('demo.rtcusermedia', ['ui.router', 'hljs', 'lumx', 'ac.angular-webrtc'])

  .config(['$stateProvider', 'hljsServiceProvider', function($stateProvider, hljsServiceProvider){
    $stateProvider.state('rtcusermedia', {
      url: '/rtcusermedia',
      templateUrl: 'RtcUserMedia/templates/rtcusermedia.template.html',
      controller: 'RtcUserMediaCtrl',
      controllerAs: 'rtcusermedia'
    });

    hljsServiceProvider.setOptions({
      tabReplace: '  '
    });
  }]);
})();