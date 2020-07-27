"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReaders_1 = require("./MatchReaders");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReaders = new MatchReaders_1.MatchReaders(csvFileReader);
matchReaders.load();
var manUnitesWin = 0;
for (var _i = 0, _a = matchReaders.match; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitesWin++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitesWin++;
    }
}
console.log(matchReaders.match);
