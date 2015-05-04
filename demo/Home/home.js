(function(){
  'use strict';

  angular.module('demo.home', ['ui.router', 'hljs', 'lumx'])

  .config(['$stateProvider', 'hljsServiceProvider', function($stateProvider, hljsServiceProvider){
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'Home/templates/home.template.html'
    });

    hljsServiceProvider.setOptions({
      tabReplace: '  '
    });
  }]);
})();