import { MatchData } from '../match/MatchReaders';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class AnalyseAndReport {
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	buildAndPrintReport(matchs: MatchData[]): void {
		this.outputTarget.print(this.analyzer.run(matchs));
	}
}
