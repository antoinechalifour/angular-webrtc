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