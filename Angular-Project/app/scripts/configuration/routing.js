angular.module('riot')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('splashScreen', {
			url: '/entry',
			templateUrl: 'views/splashScreen.html'
		})

		.state('page', {
			abstract: true,
			templateUrl: 'views/pageView.html'
		})
			.state('page.home', {
				url: '/home',
				templateUrl: 'views/homeView.html'
			})
			.state('page.grade', {
				url:'/grade',
				templateUrl: 'views/gradeView.html',
				controller: 'GradeController'
			})
			.state('page.score', {
				url:'/score',
				templateUrl: 'views/scoreView.html',
				controller: 'ScoreController'
			})
			.state('page.loot', {
				url:'/loot',
				templateUrl: 'views/lootView.html',
				controller: 'LootController'
			})

		.state('docu', {
			url: '/docu',
			templateUrl: 'views/docuView.html'
		});

	$urlRouterProvider.otherwise('/entry');
});