declare global {
	interface Window {
		passports: Passports;
	}
}
interface Passports {
	[i: string]: Passport | undefined;
}
interface Passport {
	expires: Date;
	name: string;
}
export declare function checkPassport(id: string):
	| {
			allowed: boolean;
			reason: string;
	  }
	| {
			allowed: boolean;
			reason?: undefined;
	  };
export {};
//# sourceMappingURL=solution.d.ts.map
