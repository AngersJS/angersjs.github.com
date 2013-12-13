requirejs.config({
    baseUrl: '/js',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
        bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min',
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.min',
        ngSanitize: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular-sanitize.min'
	},
    shim: {
        'angular' : {exports : 'angular'},
        'bootstrap' : {deps: ['jquery']},
        'ngSanitize' : {
            exports: 'ngSanitize',
            deps: ['angular']
        },
    }
});

/**
 * Boot RequireJS
 */
requirejs([
        'jquery', 
        'bootstrap',
        'angular',
        'ngSanitize'
    ], 
    function(jquery, _bootstrap, angular, ngSanitize){		
        ArticleListCtrl.$inject = ['$scope', '$http'];
        return {};
    }
);

/**
 * Controller ArticleListCtrl
 */
function ArticleListCtrl($scope, $http) {
    $http.get('data/articles.json').success(function(data) {
        $scope.articles = data;
    });
}
