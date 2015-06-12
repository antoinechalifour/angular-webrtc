(function(){
  'use strict';

  angular.module('demo.rtcusermedia')
  .controller('RtcUserMediaCtrl', ['$scope', 'RtcUserMedia', function($scope, RtcUserMedia){
    var vm = this;

    vm.onSuccess = function(stream){
      console.log(stream);
      if(vm.stream) vm.stream.stop();
      vm.stream = stream;
      vm.streamUrl = RtcUserMedia.getStreamUrl(stream);
    };

    vm.onError = function(err){

    };

    vm.getUserMedia = function(constraints){
      RtcUserMedia.getUserMedia(
        constraints,
        vm.onSuccess,
        vm.onError
      );
    };

    $scope.$on('$destroy', function(){
      if(vm.stream) vm.stream.stop();
    })
  }]);
})();