(function(){
  'use strict';

  angular.module('ac.angular-webrtc')

  .directive('rtcMedia', ['RtcUserMedia', 'support', function(RtcUserMedia, support){
    return {
      restrict: 'EA',
      scope: {
        streamUri: '=?',
        streamBlob: '=?',
        error: '=?'
      },
      link: function(scope, element, attrs){
        var capture = attrs.capture || 'all';
        var media;
        if(!['camera', 'audio', 'all'].indexOf(capture)){
          var err = new Error('Capture param should be camera, audio, or all.');
          err.cause = 'rtcMedia:capture'

          throw err;
          return;
        }

        switch(capture){
          case 'camera':
            media = { video: true, audio: false };
            break;
          case 'audio':
            media = { video: false, audio: true };
            break;
          case 'all': {
            media = { video: true, audio: true };
            break;
          }
        }

        RtcUserMedia.getUserMedia(media, function(stream){
          scope.streamBlob = stream;
          scope.streamUri = RtcUserMedia.getStreamUrl(stream);
        }, function(err){
          scope.error = err;
        });
      }
    }
  }]);
})();