'use strict';

angular.module('memoApp')
  .controller('MemoCtrl', function ($scope, $routeParams, memoService) {
    $scope.id = $routeParams.id;
    // console.log(id);
    $scope.memo = null;

    memoService.watchMemo($scope.id);

    memoService.getMemo($scope.id, function (memo) {
      // console.log(memo);
      $scope.memo = memo;
      $scope.$apply();
    });
  });

