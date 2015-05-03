(function(){
  'use strict';

  angular.module('ac.angular-webrtc')

  .service('RtcUserMedia', ['$rootScope', '$window', '$sce', 'support', function($rootScope, $window, $sce, support){
    var self = this;
    var getUserMedia;

    if(support === 'chrome'){
      var getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
      self.getStreamUrl = function(stream){
        return $sce.trustAsResourceUrl($window.URL.createObjectURL(stream));
      };

      if(!webkitMediaStream.prototype.getVideoTracks){
        webkitMediaStream.prototype.getVideoTracks = function(){ return this.videoTracks; };
      }

      if(!webkitMediaStream.prototype.getAudioTracks){
        webkitMediaStream.prototype.getAudioTracks = function(){ return this.audioTracks; };
      }
    }
    else if(support === 'firefox'){
      var getUserMedia = navigator.mozGetUserMedia.bind(navigator);
      self.getStreamUrl = function(stream){
        return $sce.trustAsResourceUrl($window.URL.createObjectURL(stream));
      };
      if(!MediaStream.prototype.getVideoTracks){
        MediaStream.prototype.getVideoTracks = function(){ return []; };
      }
      if(!MediaStream.prototype.getAudioTracks){
        MediaStream.prototype.getAudioTracks = function(){ return []; };
      }
    }


    self.getUserMedia = function(contraints, onSuccess, onError){
      getUserMedia(
        contraints,
        function(stream){
          $rootScope.$apply(function(){ onSuccess(stream) ;})
        },
        function(err){
          $rootScope.$apply(function(){ onError(err); });
        });
    };
  }]);
})();