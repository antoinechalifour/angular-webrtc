# angular-webrtc
A simple wrapper for WebRTC in AngularJS applications.

**in active development**

## Installation
`bower install --save ac.angular-webrtc`

Or :

1. clone the repo
`git clone https://github.com/antoinechalifour/angular-webrtc`

2. Include `angular-webrtc` in your html page.
```html
  <script src="<your vendor dir>/dist/angular-webrtc.js" type="text/javascript"></script>
```
3. Inject the `angular-webrtc` in your application.

 ```js
  angular.module('your.module', [
      'ac.angular-webrtc'
  ]);
```

## Usage
### Services
As this module is a wrapper for webrtc, it provides a few services so that you don't need to care whether you use Chrome or Firefox (other browsers are not supported).

#### RtcUserMedia
RtcUserMedia is a wrapper for getUserMedia API.

##### getUserMedia
You can get user media (microphone and camera) using RtcUserMedia.getUserMedia(constraints, onSuccess, onError).
This wrapper already wraps onSuccess and onError in a `$rootScope.$apply()` so that you don't need to care about that.

For instance, this piece of code gets the video stream :
```js
RtcUserMedia.getUserMedia(
  {video: true, audio: false},
  function(stream){
     $scope.stream = stream;
  },
  function(err){
    console.log('error');
  });
```

##### getStreamUrl
This function converts a blob into a url that you can pass to a video ng-src. It also converts it into a trusted source using Angular's `$sce` service.

#### RtcPeer
RtcPeer is a wrapper for PeerConnection, SessionDescription and IceCandidate Apis.

*more docs coming*
