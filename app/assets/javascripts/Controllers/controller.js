
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


///////items 2 crud

        menuSvc.getItems2().then(function (items2) {
           $log.info(items2);
            $scope.items2 = items2.data.reverse();

         });
         //
        //  menuSvc.singleItem($routeParams.id).then(function (response) {
        //      $scope.singleItem = response.data;
        //  });

         $scope.addItem2 = function (item2) {
             menuSvc.addItem2(item2);
         };

         $scope.editItem2 = function (item2) {
             menuSvc.editItem(item2);
         };

         $scope.deleteItem = function (id) {
             menuSvc.deleteItem(id);
         };



  //   $rootScope.$on("item:deleted", function () {
  //     menuSvc.getMenus().then(function (menus) {
  //       $scope.menus = menus.data;
  //       $route.reload();
  //     });
  // });
  //
  //   $rootScope.$on("item:added", function () {
  //     menuSvc.getMenus().then(function (menus) {
  //       $scope.menus = menus.data;
  //     });
  // });
  //
  //   $rootScope.$on("item:added", function () {
  //     menuSvc.getMsgs().then(function (items) {
  //       $scope.msgs = msgs.data.reverse();
  //   });
  // });
});
