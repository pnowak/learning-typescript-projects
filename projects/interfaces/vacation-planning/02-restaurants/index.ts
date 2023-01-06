// Write your groupLandmarks function here! ✨
// You'll need to export it so the tests can run it.

interface CityRestaurants {
	city: string;
	name: string;
}

export const groupRestaurants = (cityRestaurants: CityRestaurants[]) => {
	return cityRestaurants.reduce<Record<string, string[]>>(
		(accumulator, cityObject) => {
			const key = cityObject.city;
			const currentGroup = accumulator[key] ?? [];

			return { ...accumulator, [key]: [...currentGroup, cityObject.name] };
		},
		{}
	);
};
