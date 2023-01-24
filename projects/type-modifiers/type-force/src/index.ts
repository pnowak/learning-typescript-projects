// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
} as const;

function createCharacter(
	name: string,
	mutations: (keyof typeof mutationsLibrary)[]
): Character {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}

export interface Character {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
}

export interface Fighter {
	mutations: (keyof typeof mutationsLibrary)[];
	name: string;
}

export function duel(good: Fighter, bad: Fighter) {
	const goodFighter = createCharacter(good.name, good.mutations);
	const badFighter = createCharacter(bad.name, bad.mutations);

	return goodFighter.power / badFighter.toughness >
		badFighter.power / goodFighter.toughness
		? (["hero", goodFighter] as const)
		: (["villain", badFighter] as const);
}
