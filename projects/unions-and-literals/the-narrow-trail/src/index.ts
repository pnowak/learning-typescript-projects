export function runCommands(): boolean {
	// Declare your variables and runtime logic here! ✨
	type AvailableResource = "Food" | "Water";
	type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7;

	let availableResource: AvailableResource | "" = "";
	let day: Day = 1;
	let food = 5;
	let water = 5;

	while (day < 7) {
		const randomInteger = Math.floor(Math.random() * 6) + 1;

		switch (randomInteger) {
			case 1: {
				availableResource = "Food";
				break;
			}

			case 2: {
				availableResource = "Water";
				break;
			}

			case 3:
			case 5: {
				if (availableResource) {
					if (availableResource === "Food") {
						food += randomInteger;
						availableResource = "";
					} else if (availableResource === "Water") {
						water += randomInteger;
						availableResource = "";
					}
				} else {
					availableResource = "Water";
				}
				break;
			}

			case 4:
			case 6: {
				if (availableResource) {
					if (availableResource === "Food") {
						food += randomInteger;
						availableResource = "";
					} else if (availableResource === "Water") {
						water += randomInteger;
						availableResource = "";
					}
				} else {
					availableResource = "Food";
				}
				break;
			}

			default:
				console.log(`Sorry, we are out of ${randomInteger}.`);
		}

		water -= 1;
		food -= 1;
		day += 1;

		if (water === 0 || food === 0) {
			return false;
		}
	}

	return true;
}
