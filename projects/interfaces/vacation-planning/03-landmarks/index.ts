// Write your groupLandmarks function here! ✨
// You'll need to export it so the tests can run it.
interface LandmarkBase {
	name: string;
}

interface LandmarkForts extends LandmarkBase {
	type: "fort";
}

interface LandmarkLakes extends LandmarkBase {
	type: "lake";
	miles: number;
}

interface LandmarkLighthouses extends LandmarkBase {
	type: "lighthouse";
	height: number;
	lit: number;
}

interface LandmarkMountains extends LandmarkBase {
	type: "mountain";
	height: number;
}

interface LandmarkParks extends LandmarkBase {
	type: "park";
	acres: number;
}

interface LandmarkRivers extends LandmarkBase {
	type: "river";
	depth: number;
	length: number;
}

interface LandmarkWaterfalls extends LandmarkBase {
	type: "waterfall";
	height: number;
}

export type Landmark =
	| LandmarkForts
	| LandmarkLakes
	| LandmarkLighthouses
	| LandmarkMountains
	| LandmarkParks
	| LandmarkRivers
	| LandmarkWaterfalls;

export const describeLandmark = (landmark: Landmark) => {
	const lines = [`${landmark.name} is a ${landmark.type} in Upstate New York.`];

	switch (landmark.type) {
		case "lake":
			lines.push(`It covers ${landmark.miles} square miles of water.`);
			break;
		case "lighthouse":
			lines.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
			);
			break;
		case "mountain":
			lines.push(`Its peak is ${landmark.height} feet high.`);
			break;
		case "park":
			lines.push(`It covers ${landmark.acres} square acres.`);
			break;
		case "river":
			lines.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
			);
			break;
		case "waterfall":
			lines.push(`It is ${landmark.height} feet high.`);
			break;
		default:
			break;
	}

	return lines.join("\n");
};
