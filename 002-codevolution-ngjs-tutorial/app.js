var app = angular.module('myApp', []);

app.controller('myController', ['$scope', function ($scope) {


    $scope.form = {}

    $scope.addReview = function () {
        $scope.reviews.push($scope.form)
        $scope.form = {}
    }

    $scope.reviews = [
        {
            comment: 'Could this be more awesome?',
            by: "JohnDoe@gmail.com"
        },
        {
            comment: 'Could this be more funny?',
            by: "DwayneJohnson@gmail.com"
        },
        {
            comment: 'Could this be more challeging?',
            by: "WayneRooney@gmail.com"
        },
    ]
}])

app.directive('userinformation', function () {

    return {
        restrict: "AE",
        templateUrl: "userinfo.html",
    }

}) 