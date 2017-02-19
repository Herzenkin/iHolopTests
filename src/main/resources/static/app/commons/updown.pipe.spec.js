"use strict";
var updown_pipe_1 = require("./updown.pipe");
describe('UpDownPipe', function () {
    var pipe;
    beforeEach(function () {
        pipe = new updown_pipe_1.UpDownPipe();
    });
    it('should transform string into UpDownCase', function () {
        expect(pipe.transform('pipes')).toEqual('PiPeS');
    });
    it('should transform nothing', function () {
        expect(pipe.transform('')).toBe('');
    });
});
//# sourceMappingURL=updown.pipe.spec.js.map