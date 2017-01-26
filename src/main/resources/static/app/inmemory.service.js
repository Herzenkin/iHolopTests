"use strict";
var InMemoryService = (function () {
    function InMemoryService() {
    }
    InMemoryService.prototype.createDb = function () {
        var holops = [{
                id: 1,
                holopName: 'Uasysa',
                master: 'Lev Nickolaevich',
                dateFrom: '2016-10-10',
                dateTo: '2016-10-10'
            },
            {
                id: 2,
                holopName: 'Prohor',
                master: 'Lev Nickolaevich',
                dateFrom: '2016-10-10',
                dateTo: '2016-10-10'
            }, {
                id: 3,
                holopName: 'Jango',
                master: 'Calvin Candie',
                dateFrom: '2016-10-10',
                dateTo: '2016-10-10'
            }];
        return { holops: holops };
    };
    return InMemoryService;
}());
exports.InMemoryService = InMemoryService;
//# sourceMappingURL=inmemory.service.js.map