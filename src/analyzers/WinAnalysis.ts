import { MatchData } from '../match/MatchReaders';
import { Analyzer } from '../tools/AnalyseAndReport';
import { MatchResult } from '../match/MatchResult';
export class WinAnalysis implements Analyzer {
	constructor(public team: string) {}

	run(matchs: MatchData[]): string {
		let manUnitesWin = 0;
		for (let match of matchs) {
			if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
				manUnitesWin++;
			} else if (
				match[2] === this.team &&
				match[5] === MatchResult.AwayWin
			) {
				manUnitesWin++;
			}
		}
		return `${this.team} has win ${manUnitesWin} times!`;
	}
}
