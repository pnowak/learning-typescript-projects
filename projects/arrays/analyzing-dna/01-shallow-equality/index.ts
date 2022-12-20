// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.
type ShallowEquality = (a: string[], b: string[]) => boolean;

export const shallowEquality: ShallowEquality = (a, b) => {
	if (a.length !== b.length) {
		return false;
	}

	for (let indexA = 0; indexA < a.length; indexA += 1) {
		if (a[indexA] !== b[indexA]) {
			return false;
		}
	}

	return true;
};
