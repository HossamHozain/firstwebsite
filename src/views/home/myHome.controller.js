(function() {
  "use strict";
  angular.module("main").controller("myHome", myHome);
  myHome.$inject = ["itemsService","$timeout"];
  function myHome(itemsService,$timeout) {
    let $ctrl = this;
    $ctrl.slider1 = "one";
    $ctrl.items = itemsService.getFeatures();
    $ctrl.pass = (type,e) => {
      
      if (type === "features") {
        $ctrl.items = itemsService.getFeatures();
      } else if (type === "on sale") {
        $ctrl.items = itemsService.getOnSale();
      } else if (type === "top rated") {
        $ctrl.items = itemsService.getTopRated();
      }
    };
    //settings for owl carousel
    $ctrl.properties = {
      loop: true,
      lazyLoad: true,
      margin: 10,
      smartSpeed: 2000,
      responsiveClass: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 3,
          loop: false
        }
      }
    };

  }
})();
