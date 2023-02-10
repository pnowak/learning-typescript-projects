// Write your types here! ✨
declare global {
	function checkPassport(id: string): CheckPassportReturnType;
}

interface CheckPassportDontAllowed {
	allowed: false;
	reason: "No passport found." | "No known name." | "Passport has expired.";
}

interface CheckPassportAllowed {
	allowed: true;
}

type CheckPassportReturnType = CheckPassportDontAllowed | CheckPassportAllowed;

export function checkPassport(id: string) {
	const passport = window.passports[id];

	if (!passport) {
		return {
			allowed: false,
			reason: "No passport found.",
		};
	}

	if (!passport.name) {
		return {
			allowed: false,
			reason: "No known name.",
		};
	}

	if (passport.expires.getTime() < new Date().getTime()) {
		return {
			allowed: false,
			reason: "Passport has expired.",
		};
	}

	return {
		allowed: true,
	};
}
