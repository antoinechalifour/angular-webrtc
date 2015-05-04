(function(){
  'use strict';

  angular.module('demo.home', ['ui.router', 'lumx'])

  .config(['$stateProvider', function($stateProvider){
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'Home/templates/home.template.html'
    });
  }]);
})();