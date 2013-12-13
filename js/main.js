requirejs.config({
    baseUrl: '/js',
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
        bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min',
        angular: '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.1/angular.min'
	},
    shim: {
        'angular' : {'exports' : 'angular'},
        'bootstrap' : {deps: ['jquery']}
    }
});

/**
 * Boot RequireJS
 */
requirejs([
        'jquery', 
        'bootstrap',
        'angular'
    ], 
    function(jquery, _bootstrap, angular){		
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
