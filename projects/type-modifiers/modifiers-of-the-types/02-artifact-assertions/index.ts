// Write your types and function below! ✨
// You'll need to export them so the tests can run it.

const artifacts = {
	"Castle TypeScript": {
		type: "fortress",
	},
	"Cosmic Key": {
		type: "device",
	},
	"Power Sword": {
		type: "sword",
	},
	Starseed: {
		type: "magic",
	},
} as const;

export type ArtifactName = keyof typeof artifacts;

export const getArtifactType = (artifactName: ArtifactName) => {
	return artifacts[artifactName].type;
};
