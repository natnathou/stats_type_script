"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReaders_1 = require("./match/MatchReaders");
var AnalyseAndReport_1 = require("./tools/AnalyseAndReport");
var matchReaders = MatchReaders_1.MatchReaders.read('football.csv');
matchReaders.load();
//console log result of the team Southampton
var analyseAndReport = AnalyseAndReport_1.AnalyseAndReport.initConsoleReport('Southampton');
analyseAndReport.buildAndPrintReport(matchReaders.match);
//build html report of the team Man United
var analyseAndReport2 = AnalyseAndReport_1.AnalyseAndReport.initHtmlReport('Man United');
analyseAndReport2.buildAndPrintReport(matchReaders.match);
