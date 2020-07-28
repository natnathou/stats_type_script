import { OutputTarget } from '../tools/AnalyseAndReport';

export class ConsoleReport implements OutputTarget {
	print(report: string): void {
		console.log(report);
	}
}
