import { MatchData } from '../match/MatchReaders';
import { WinAnalysis } from '../analyzers/WinAnalysis';
import { ConsoleReport } from '../report/ConsoleReport';
import { HtmlReport } from '../report/HtmlReport';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class AnalyseAndReport {
	static initConsoleReport(team: string): AnalyseAndReport {
		return new AnalyseAndReport(new WinAnalysis(team), new ConsoleReport());
	}

	static initHtmlReport(team: string): AnalyseAndReport {
		return new AnalyseAndReport(new WinAnalysis(team), new HtmlReport());
	}
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	buildAndPrintReport(matchs: MatchData[]): void {
		this.outputTarget.print(this.analyzer.run(matchs));
	}
}
