'use strict';

angular.module('fmgApp')
  .directive('footer', function () {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link: function() {
      }
    };
  });
