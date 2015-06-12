(function(){
  'use strict';

  angular.module('ac.angular-webrtc', []);
})();

(function(){
  'use strict';
  var support = false;
  if(navigator.mozGetUserMedia) support = 'firefox';
  else if(navigator.webkitGetUserMedia) support = 'chrome';

  angular.module('ac.angular-webrtc')
  .value('support', support);
})();
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
(function(){
  'use strict';

  angular.module('ac.angular-webrtc')

  .service('RtcPeer', ['support', function(support){
    var self = this;

    if(support === 'chrome'){
      self.PeerConnection = webkitRTCPeerConnection;
      self.SessionDescription = RTCSessionDescription;
      self.IceCandidate = RTCIceCandidate;
    }
    else if(support === 'firefox'){
      self.PeerConnection = mozRTCPeerConnection;
      self.SessionDescription = mozRTCSessionDescription;
      self.IceCandidate = mozRTCIceCandidate;
    }
  }]);
})();
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