// Write your pick function here! ✨
// You'll need to export it so the tests can run it.
type Primitive = string | number | bigint | boolean | symbol | undefined | null;

export function pick<
	TContainer extends { [key: string]: Primitive },
	TKey extends keyof TContainer
>(container: TContainer, key: TKey) {
	return container[key];
}
