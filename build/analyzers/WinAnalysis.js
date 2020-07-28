"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
var MatchResult_1 = require("../match/MatchResult");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(team) {
        this.team = team;
    }
    WinAnalysis.prototype.run = function (matchs) {
        var manUnitesWin = 0;
        for (var _i = 0, matchs_1 = matchs; _i < matchs_1.length; _i++) {
            var match = matchs_1[_i];
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                manUnitesWin++;
            }
            else if (match[2] === this.team &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                manUnitesWin++;
            }
        }
        return this.team + " has win " + manUnitesWin + " times!";
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
