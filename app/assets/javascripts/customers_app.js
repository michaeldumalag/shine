var app = angular.module('customers', []);

app.controller("CustomerSearchController", [
          "$scope",
  function($scope) {
    $scope.customers = [];
    $scope.search = function(searchTerm) {
      $scope.customers = [
        {
          "first_name":"Schuyler",
          "last_name":"Cremin",
          "email":"giles@macguyver.net",
          "username":"jillian0",
          "created_at":"2015-03-04",
        },
        {
          "first_name":"Derick",
          "last_name":"Ebert",
          "email":"lupel1@rennerfisher.org",
          "username":"ubaldo_kaulkel",
          "created_at":"2015-03-04",
        },
        {
          "first_name":"Derick",
          "last_name":"Johnsons",
          "email":"dj@somewhere.org",
          "username":"djj",
          "created_at":"2015-03-04",
        }
      ]

      $scope.searchedFor = searchTerm;
    }
  }
]);
