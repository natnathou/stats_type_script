"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyseAndReport = void 0;
var AnalyseAndReport = /** @class */ (function () {
    function AnalyseAndReport(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    AnalyseAndReport.prototype.buildAndPrintReport = function (matchs) {
        this.outputTarget.print(this.analyzer.run(matchs));
    };
    return AnalyseAndReport;
}());
exports.AnalyseAndReport = AnalyseAndReport;
