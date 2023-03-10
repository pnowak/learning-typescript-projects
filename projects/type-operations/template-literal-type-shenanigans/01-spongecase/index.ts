// Write your SpOnGeCaSe type here! ✨
// You'll need to export it so the tests can run it.
export type SpOnGeCaSe<
	Text,
	FirstTransform extends "upper" | "lower" = "upper"
> = Text extends `${infer Prefix}${infer Rest}`
	? FirstTransform extends "upper"
		? `${Capitalize<Prefix>}${SpOnGeCaSe<Rest, "lower">}`
		: FirstTransform extends "lower"
		? `${Lowercase<Prefix>}${SpOnGeCaSe<Rest>}`
		: never
	: Text;
