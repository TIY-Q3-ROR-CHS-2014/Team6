
angular.module("menuModule")

    .controller("menuCtrl", function ($scope, $route, $rootScope, $location, $routeParams, $anchorScroll, $log, menuSvc) {

        $scope.rests = menuSvc.getRests();

        ///SCROLLING DOWN
        $(function() {
        $(".welcomeWrap").on("click", "#scrollButt", function() {
        $('html, body').animate({
          scrollTop: $("#scroll").offset().top }, 750);  });
        });

// CRUD FOR MENU ITEMS

        menuSvc.getItems().then(function (items) {
           $log.info(items);
            $scope.items = items.data.reverse();

         });
         //
        //  menuSvc.singleItem($routeParams.id).then(function (response) {
        //      $scope.singleItem = response.data;
        //  });

         $scope.addItem = function (item) {
             menuSvc.addItem(item);
         };

         $scope.editItem = function (item) {
             menuSvc.editItem(item);
         };

         $scope.deleteItem = function (id) {
             menuSvc.deleteItem(id);
         };


    $rootScope.$on("item:deleted", function () {
      menuSvc.getItems().then(function (items) {
        $scope.items = items.data;
        $route.reload();
      });
  });

    $rootScope.$on("item:added", function () {
      menuSvc.getItems().then(function (items) {
        $scope.items = items.data.reverse();
      });
  });
});
