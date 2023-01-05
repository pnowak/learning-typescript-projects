// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.
type Coordinate = [number, number, number];

export interface City {
	coordinates: {
		north: Coordinate;
		west: Coordinate;
	};
	name: string;
	catchphrase?: string;
}

interface CoordinateMap {
	[key: number]: string;
}

const coordinateMap: CoordinateMap = {
	0: "°",
	1: "'",
	2: '"',
} as const;

const reduceCoordinate = (coordinate: Coordinate, direction: "N" | "W") =>
	coordinate.reduce<Record<number, string>>(
		(accumulator, currentValue, currentIndex) =>
			`${accumulator}` +
			`${currentValue}` +
			`${coordinateMap[currentIndex]}${direction}`,
		``
	);

export const describeCity = (city: City) =>
	`${city.name}, New York
    ${city.catchphrase ? `* "${city.catchphrase}"` : ""}
    * Located at ${reduceCoordinate(
			city.coordinates.north,
			"N"
		)} ${reduceCoordinate(city.coordinates.west, "W")}`;
