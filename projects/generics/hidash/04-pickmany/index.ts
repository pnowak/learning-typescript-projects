// Write your pickMany function here! ✨
// You'll need to export it so the tests can run it.
export function pickMany<
	TContainer extends object,
	TKeys extends keyof TContainer
>(container: TContainer, keys: TKeys[]) {
	const result: TContainer[TKeys][] = [];

	for (const key of keys) {
		result.push(container[key]);
	}

	return result;
}
