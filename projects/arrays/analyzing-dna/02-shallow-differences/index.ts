// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
type ShallowDifferences = (
	a: string[],
	b: string[]
) => (string | undefined)[] | undefined;

export const shallowDifferences: ShallowDifferences = (a, b) => {
	if (a.length !== b.length) {
		return undefined;
	}

	const resultArray: (string | undefined)[] = [];

	for (let indexA = 0; indexA < a.length; indexA += 1) {
		if (a[indexA] === b[indexA]) {
			resultArray.push(a[indexA]);
		} else {
			resultArray.push(undefined);
		}
	}

	return resultArray;
};
