// Write your unique function here! ✨
// You'll need to export it so the tests can run it.
export const unique = <TItem>(...items: TItem[][]) => {
	const result: TItem[] = [];

	for (let i = 0; i < items.length; i += 1) {
		for (let j = 0; j < items[i].length; j += 1) {
			if (!result.includes(items[i][j])) {
				result.push(items[i][j]);
			}
		}
	}

	return result;
};
