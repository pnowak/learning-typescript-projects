// Write your type and classes here! ✨
// You'll need to export the classes so the tests can run them.
export type SmallPetFoot =
	| "bugs"
	| "fruits"
	| "insects"
	| "plants"
	| "seeds"
	| "vegetables";

abstract class SmallFurryPet {
	readonly species: string;
	happiness = 0;

	constructor(species: string) {
		this.species = species;
	}

	abstract eats(food: SmallPetFoot): boolean;

	isHappy() {
		return this.happiness > 0;
	}
}

export class Gerbil extends SmallFurryPet {
	constructor() {
		super("Gerbil");
	}

	eats(food: SmallPetFoot): boolean {
		return ["insects", "plants", "seeds", "vegetables"].includes(food);
	}

	dig() {
		this.happiness += 1;
	}
}

export class Hamster extends SmallFurryPet {
	constructor() {
		super("Hamster");
	}

	eats() {
		return true;
	}

	run() {
		this.happiness += 1;
	}
}
