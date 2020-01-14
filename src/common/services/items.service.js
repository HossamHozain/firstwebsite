(function () {
    "use strict";
    angular
        .module('main')
        .service('itemsService', itemsService)
        .service('', itemsService);

    itemsService.$inject = [];
    function itemsService() {
        let service = this;
        service.getCategories = function () {
        service.categories=['Features','On Sale','Top rated']
        };
        service.getFeatures=function () {
          service.features=  [{ name: "pen", price: "1000" },
            { name: "dell laptop", price: "30000" },
            { name: "hp laptop", price: "28000" },
            { name: "hp ", price: "2800" },
            { name: "iphone", price: "8000" },
            { name: "glass", price: "20" }];
            return service.features;
        };
        service.getOnSale=function () {
            service.onSale=  [{ name: "pen", price: "1000" },

                { name: "laptop", price: "28000" },
                { name: "gogo ", price: "2800" },
                { name: "gfl", price: "8000" },
                { name: "fg", price: "20" }];
            return service.onSale;
        };
        service.getTopRated=function () {
            service.topRated=  [{ name: "pen", price: "1000" },

                { name: "fd ", price: "2800" },
                { name: "fg", price: "8000" },
                { name: "fggggghgf", price: "20" }];
            return service.topRated;
        }
    }
})();





