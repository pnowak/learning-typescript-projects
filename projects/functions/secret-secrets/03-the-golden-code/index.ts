// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.
export type MakeGuess = (text: string, attempt: number) => string;
export type ValidateGuess = (guess: string) => boolean;

export type Options = {
	attempts: number;
	makeGuess: MakeGuess;
	validateGuess: ValidateGuess;
};

export function createCodeCracker(options: Options) {
	const { attempts, makeGuess, validateGuess } = options;

	return function createCodeCrackerRecursive(
		text: string,
		attempt = 0
	): string | undefined {
		if (attempts > attempt) {
			const makeGuestResult = makeGuess(text, attempt);

			const result = validateGuess(makeGuestResult)
				? makeGuestResult
				: undefined;

			return result !== undefined
				? result
				: createCodeCrackerRecursive(text, (attempt += 1));
		}
	};
}
