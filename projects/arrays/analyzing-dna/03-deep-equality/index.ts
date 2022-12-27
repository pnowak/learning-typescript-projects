// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
type DeepEquality = (a: string[][], b: string[][]) => boolean;

export const deepEquality: DeepEquality = (a, b) => {
	if (a.length !== b.length) {
		return false;
	}

	for (let indexA = 0; indexA < a.length; indexA += 1) {
		if (a[indexA].length !== b[indexA].length) {
			return false;
		}

		for (let indexAA = 0; indexAA < a[indexA].length; indexAA += 1) {
			if (a[indexA][indexAA] !== b[indexA][indexAA]) {
				return false;
			}
		}
	}

	return true;
};
