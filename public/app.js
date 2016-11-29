var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'ngAnimate',
    'ngMessages',
    'appCtrl',
    'newMealCtrl',
    'newMealService',
    'myEarningsCtrl',
    'myEarningsService',
    'tabsCtrl',
    'tabsService',
    'calcCtrl',
    'calcService'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});