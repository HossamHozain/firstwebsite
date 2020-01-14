(function() {
    "use strict";
    angular
        .module('common').component('imagesSlider',{
        templateUrl:'src/common/components/imagesSlider/imagesSlider.html',
        bindings:{
            target:"<"
        }
    })
})();
