'use strict';

angular.module('aesWebsite', [
  'ngRoute',
  'aesWebsite.view1',
  'aesWebsite.view2',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);