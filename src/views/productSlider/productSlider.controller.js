(function() {
  "use strict";
  angular.module("main").controller("productSlider", productSlider);
  productSlider.$inject = ["$stateParams"];
  function productSlider($stateParams) {
    let $ctrl = this;
    let category=$stateParams.productCategory;
    $ctrl.$onInit = function() {
      if (category == "features") {
        $ctrl.data = [
          { name: "pen", price: "1000" },
          { name: "dell laptop", price: "30000" },
          { name: "hp laptop", price: "28000" },
          { name: "hp ", price: "2800" },
          { name: "dfs dsfds", price: "2000" },
          { name: "sdfds dsfsd", price: "20" }

        ];
      }
    };
  }
})();
