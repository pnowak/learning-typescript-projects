// Declare your types here! ✨
export declare function isTrick(section: Trick): section is Tick;

export declare function isVolunteerIllusion(
	section: Illusion
): section is Illusion;

export declare function getAudienceMemberFor(member: Member): Promise<Act>;

interface Member {
	duration: number;
	title: string;
}

export interface Tick {
	gimmick: string;
}

export interface Illusion extends Member {
	introduction(): string;
	flair(): string;
	payoff(): string;
}

export type Act = {
	performer: string;
	name: string;
	sections: (Trick | Illusion)[];
};
