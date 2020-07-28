export const dataStringToDate = (dateString: string): Date => {
	const dataParse = dateString.split('/').map((data: string): number => {
		return parseInt(data);
	});

	return new Date(dataParse[2], dataParse[1] - 1, dataParse[0]);
};
