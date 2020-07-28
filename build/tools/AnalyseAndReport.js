"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyseAndReport = void 0;
var WinAnalysis_1 = require("../analyzers/WinAnalysis");
var ConsoleReport_1 = require("../report/ConsoleReport");
var HtmlReport_1 = require("../report/HtmlReport");
var AnalyseAndReport = /** @class */ (function () {
    function AnalyseAndReport(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    AnalyseAndReport.initConsoleReport = function (team) {
        return new AnalyseAndReport(new WinAnalysis_1.WinAnalysis(team), new ConsoleReport_1.ConsoleReport());
    };
    AnalyseAndReport.initHtmlReport = function (team) {
        return new AnalyseAndReport(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    AnalyseAndReport.prototype.buildAndPrintReport = function (matchs) {
        this.outputTarget.print(this.analyzer.run(matchs));
    };
    return AnalyseAndReport;
}());
exports.AnalyseAndReport = AnalyseAndReport;
