"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReaders = void 0;
var utils_1 = require("../tools/utils");
var MatchReaders = /** @class */ (function () {
    function MatchReaders(reader) {
        this.reader = reader;
        this.match = [];
    }
    MatchReaders.prototype.load = function () {
        this.reader.read();
        this.match = this.reader.data.map(function (row) {
            return [
                utils_1.dataStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    return MatchReaders;
}());
exports.MatchReaders = MatchReaders;
