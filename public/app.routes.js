var router = angular.module('materialApp.routes', ['ui.router']);
router.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    // UI Router States
    // Inserting Page title as State Param
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            params: {
                title: "Waitstaff Calculator"
            }
        })
        .state('new-meal', {
            url: '/new-meal',
            templateUrl: '/modules/new-meal/views/new-meals.html',
            controller: 'newMealCtrl',
            controllerAs: 'Meals',
            params: {
                title: "New Meal"
            }
        })
        .state('my-earnings', {
            url: '/my-earnings',
            templateUrl: '/modules/my-earnings/views/my-earnings.html',
            controller: 'myEarningsCtrl',
            controllerAs: 'Earnings',
            params: {
                title: "Earnings"
            }
        })
        .state('tabs', {
            url: '/tabs',
            templateUrl: '/modules/tabs/views/tabs.html',
            controller: 'tabsCtrl',
            controllerAs: 'Tabs',
            params: {
                title: "Tabs"
            }
        })
        .state('calc', {
            url: '/calc',
            templateUrl: '/modules/calc/views/calc.html',
            controller: 'calcCtrl',
            controllerAs: 'Calc',
            params: {
                title: "Waitstaff Calc"
            }
        })
        .state('otherwise', {
            url: "*path",
            templateUrl: "home.html"
        });

    $locationProvider.html5Mode(true);

});