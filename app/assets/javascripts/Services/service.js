angular.module("menuModule")
    .factory("menuSvc", function ( $rootScope, $log, $http) {

        var rests = [
        {

            title: "HUSK",
            link: "1",
            image: "http://tomostyle.files.wordpress.com/2011/08/img_12681.jpg",
            phone: "(843) 577-2500",
            address: "76 Queen St, Charleston, SC 29401",
            site:  "huskrestaurant.com",

        },

        {
            title: "CHICAGO'S",
            link: "3",
            image: "https://s3.amazonaws.com/uploads.hipchat.com/31349/1041630/8B4CqsAyT6TJG57/chicagos_logo.png",
            phone: "(770) 993-7464",
            address: "4401 Shallowford Rd NE, Roswell, GA 30075",
            site: "http://www.chicagosrestaurant.com/",

        },

        {
            title: "MCCRADY'S",
            link: "2",
            image: "http://4.bp.blogspot.com/-6G8epA5qts0/T_zYoo0JFII/AAAAAAAAAUs/MJ7aOFVMovo/s1600/McCrady%2527s+Restaurant+Charleston+SC+Jason+Frye+Food+Writer.JPG",
            phone: "(843) 577-0025",
            address: "2 Unity Alley, Charleston, SC 29401",
            site: "http://mccradysrestaurant.com/",
        },
            {
            title: "MINERO",
            link: "4",
            image: "https://pbs.twimg.com/profile_images/507665219108499458/uVk7-ZQs_400x400.jpeg",
            phone: "",
            address: "",
            site: "",
            hours: "",
            }
        ];

        var getRests = function(){
          return rests;
        };

// CRUD FOR MENU ITEMS

        var items = "/menus/1/items";

        var getItems = function(){
          return $http.get(items) ;
        };

        // var singleItem = function(id) {
        //    return $http.get(items + "/" + id);
        // };

        var createItem = function(item) {
          return $http.post(items, item).then(function (response) {
                $rootScope.$broadcast("item:added");
                $log.info("item:added");
            })
        };

        var deleteItem = function(item) {
          console.log(item);
          return $http.delete("/menus/" + item.menu_id + "/items/" + item.id, item).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("item:deleted");
                $log.info("item:deleted");
            })
        };

        var editItem = function(item) {
          return $http.put("/menus/" + item.menu_id + "/items/" + item.id, item).then(function (response) {
                $rootScope.$broadcast("item:updated");
                $log.info("item:updated");
            })
        };

    ///////items2
        var items2 = "/menus/2/items";

        var getItems2 = function(){
          return $http.get(items2) ;
        };

        // var singleItem = function(id) {
        //    return $http.get(items + "/" + id);
        // };

        var createItem2 = function(item2) {
          return $http.post(items2, item).then(function (response) {
                $rootScope.$broadcast("item2:added");
                $log.info("item2:added");
            })
        };

        var deleteItem2 = function(item2) {
          console.log(item2);
          return $http.delete("/menus/" + item2.menu_id + "/items2/" + item2.id, item).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("item2:deleted");
                $log.info("item2:deleted");
            })
        };

        var editItem2 = function(item2) {
          return $http.put("/menus/" + item2.menu_id + "/items2/" + item2.id, item).then(function (response) {
                $rootScope.$broadcast("item2:updated");
                $log.info("item2:updated");
            })
        };

        ///////////////////////

        return {
          getRests: getRests,

          ///items1
          getItems: getItems,
          addItem: createItem,
          deleteItem: deleteItem,
          editItem: editItem,
          //items2
          getItems2: getItems2,
          addItem2: createItem2,
          deleteItem2: deleteItem2,
          editItem2: editItem2,
          //items3

          //items4
        };
    });
