import { OutputTarget } from '../tools/AnalyseAndReport';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
	print(report: string): void {
		fs.writeFileSync('report.html', `<div>${report}<div>`);
	}
}
