angular.module('AngersJS', ['ngSanitize'])
.controller('ArticleListCtrl', ['$scope', '$http', ArticleListCtrl]);

/**
 * Controller ArticleListCtrl
 */
function ArticleListCtrl($scope, $http) {
    $http.get('data/articles.json').success(function(data) {
        $scope.articles = data;
    });
}
