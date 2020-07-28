import { dataStringToDate } from '../tools/utils';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from '../tools/CsvFileReader';

export type MatchData = [
	Date,
	string,
	string,
	number,
	number,
	MatchResult,
	string
];

interface DataReader {
	data: string[][];
	read(): void;
}

export class MatchReaders {
	static read(fileName: string): MatchReaders {
		let csvFileReader = new CsvFileReader(fileName);
		return new MatchReaders(csvFileReader);
	}
	match: MatchData[] = [];
	constructor(public reader: DataReader) {}

	load(): void {
		this.reader.read();
		this.match = this.reader.data.map(
			(row: string[]): MatchData => {
				return [
					dataStringToDate(row[0]),
					row[1],
					row[2],
					parseInt(row[3]),
					parseInt(row[4]),
					row[5] as MatchResult,
					row[6]
				];
			}
		);
	}
}
