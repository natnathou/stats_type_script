import { MatchReaders } from './match/MatchReaders';
import { AnalyseAndReport } from './tools/AnalyseAndReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './report/ConsoleReport';
import { HtmlReport } from './report/HtmlReport';

let matchReaders = MatchReaders.read('football.csv');
matchReaders.load();

//console log result of the team Southampton
let analyseAndReport = AnalyseAndReport.initConsoleReport('Southampton');
analyseAndReport.buildAndPrintReport(matchReaders.match);

//build html report of the team Man United
let analyseAndReport2 = AnalyseAndReport.initHtmlReport('Man United');
analyseAndReport2.buildAndPrintReport(matchReaders.match);
