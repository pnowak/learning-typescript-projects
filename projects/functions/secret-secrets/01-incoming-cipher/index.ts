// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
type Cipher = (text: string) => string;

type CreateCipher = (cipher: Cipher) => Cipher;

export const createCipher: CreateCipher = (cipher) => {
	const cipherCurrying = (text: string) => {
		const arrayOfString: string[] = [];

		for (const t of text) {
			arrayOfString.push(cipher(t));
		}

		return arrayOfString.join("");
	};

	return cipherCurrying;
};
