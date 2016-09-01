(function (module) {
    var minMaxFilter = function () {
        return function (items, minValue, maxValue) {
            if (minValue === undefined || minValue === null)
                minValue = 0;
            if (maxValue === undefined || maxValue === null)
                maxValue = 5;
            var filteredItems = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].rating >= minValue && items[i].rating <= maxValue)
                    filteredItems.push(items[i]);
            }
            return filteredItems;
        }
    }

    module.filter("minmax", minMaxFilter);

}(angular.module("common")))