// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
type DeepDifferences = (
	a: string[][],
	b: string[][]
) => ((string | undefined)[] | undefined)[];

export const deepDifferences: DeepDifferences = (a, b) => {
	const resultArray: ((string | undefined)[] | undefined)[] = [];

	if (a.length !== b.length) {
		resultArray.push(undefined);
		return resultArray;
	}

	for (let indexA = 0; indexA < a.length; indexA += 1) {
		if (a[indexA].length !== b[indexA].length) {
			resultArray.push(undefined);
			continue;
		}

		resultArray.push([]);

		for (let indexAA = 0; indexAA < a[indexA].length; indexAA += 1) {
			a[indexA][indexAA] === b[indexA][indexAA]
				? resultArray[indexA]!.push(a[indexA][indexAA])
				: resultArray[indexA]!.push(undefined);
		}
	}

	return resultArray;
};
