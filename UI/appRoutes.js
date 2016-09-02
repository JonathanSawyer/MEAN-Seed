angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home/index.html',
			controller: 'MainController'
		})

		.when('/comments', {
			templateUrl: 'views/comment/index.html',
			controller: 'CommentController'
		})

		.when('/sentimentanalysis', {
			templateUrl: 'views/sentiment/index.html',
			controller: 'SentimentController'	
		});

	$locationProvider.html5Mode(true);

}]);