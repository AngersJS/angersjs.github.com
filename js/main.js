var AngersJS = angular.module('AngersJS', ['ngSanitize']);

/**
 * Controller ArticleListCtrl
 */
AngersJS.controller('ArticleListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('data/articles.json').success(function(data) {
        console.table(data);
        $scope.articles = data;
    });
}]);
