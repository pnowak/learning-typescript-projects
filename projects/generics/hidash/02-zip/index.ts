// Write your zip function here! ✨
// You'll need to export it so the tests can run it.
export const zip = <TItem1, TItem2>(array1: TItem1[], array2: TItem2[]) => {
	const result: (TItem1 | TItem2)[] = [];

	const len = array1.length > array2.length ? array1.length : array2.length;
	let i = 0;

	while (i < len) {
		if (array1[i]) {
			result.push(array1[i]);
		}

		if (array2[i]) {
			result.push(array2[i]);
		}

		i += 1;
	}

	return result;
};
