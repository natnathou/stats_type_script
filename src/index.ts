import { MatchReaders } from './MatchReaders';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

let csvFileReader = new CsvFileReader('football.csv');
let matchReaders = new MatchReaders(csvFileReader);
matchReaders.load();

let manUnitesWin = 0;

for (let match of matchReaders.match) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitesWin++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitesWin++;
	}
}
console.log(matchReaders.match);
