(function() {
  "use strict";
  angular.module("main").config(routeConfig);
  routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "src/views/home/home.html",
        controller: "myHome as $ctrl"
      })
      // .state("home.productSlider", {
      //   // templateUrl:'src/views/productSlider/productSlider.html',
      //   controller: "productSlider as $ctrl",
      //     params:{
      //       productCategory:'features'
      //     }
      // });
    //   .state("view2", {
    //     url: "view2",
    //     templateUrl: "view2.html",
    //     controller: ctrl,
    //     controllerAs: $ctrl,
    //     resolve: function() {}
    //   })
    //   .state("view3", {
    //     url: "view3",
    //     templateUrl: "view3.html",
    //     controller: ctrl,
    //     controllerAs: $ctrl,
    //     resolve: function() {}
    //   })
    //   .state("view4", {
    //     url: "view4",
    //     templateUrl: "view4.html",
    //     controller: ctrl,
    //     controllerAs: $ctrl,
    //     resolve: function() {}
    //   })
    //   .state("view5", {
    //     url: "view5",
    //     templateUrl: "view5.html",
    //     controller: ctrl,
    //     controllerAs: $ctrl,
    //     resolve: function() {}
    //   });
  }
})();
