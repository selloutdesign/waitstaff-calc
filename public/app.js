var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'appCtrl',
    'cardsCtrl',
    'cardsService',
    'listCtrl',
    'listService',
    'tabsCtrl',
    'tabsService',
    'calcCtrl',
    'calcService'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});