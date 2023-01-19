import { characters } from "./characters";

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.

export interface Character {
	name: string;
	powers: string[];
	side: "good" | "evil";
}
export const announceCharacter = (character: string): Character => {
	const char = JSON.parse(character) as Character;

	const logs = [`I am ${char.name}.`];
	logs.push(`My powers are: ${char.powers.join(", ")}.`);
	logs.push(`I am ${char.side}.`);

	logs.forEach((log) => console.log(log));

	return char;
};
