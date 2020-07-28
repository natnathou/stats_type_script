import { MatchReaders } from './match/MatchReaders';
import { CsvFileReader } from './tools/CsvFileReader';
import { AnalyseAndReport } from './tools/AnalyseAndReport';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { ConsoleReport } from './report/ConsoleReport';
import { HtmlReport } from './report/HtmlReport';

let csvFileReader = new CsvFileReader('football.csv');
let matchReaders = new MatchReaders(csvFileReader);
matchReaders.load();

//console log result of the team Southampton
let analyseAndReport = new AnalyseAndReport(
	new WinAnalysis('Southampton'),
	new ConsoleReport()
);
analyseAndReport.buildAndPrintReport(matchReaders.match);

//build html report of the team Man United
let analyseAndReport2 = new AnalyseAndReport(
	new WinAnalysis('Man United'),
	new HtmlReport()
);
analyseAndReport2.buildAndPrintReport(matchReaders.match);
