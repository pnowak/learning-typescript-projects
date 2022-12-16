// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

export type Cipher = (character: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
) {
	return (text: string) => {
		let result = "";

		for (const char of text) {
			switch (true) {
				case /[aeiou]/.test(char):
					result += onVowel(char);
					break;
				case /[bcdfghjklmnpqrstvwxyz]/.test(char):
					result += onConsonant(char);
					break;
				default:
					result += onPunctuation(char);
					break;
			}
		}

		return result;
	};
}
