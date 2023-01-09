// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.
interface Song {
	type: "song";
	artist: string | string[];
	name: string;
	length: number;
}

interface Album {
	type: "album";
	songs: Song[];
}

interface Playlist {
	type: "playlist";
	resolve: () => Song[];
}

type UnrollPlaylist = Song | Album | Playlist;

interface Artists {
	[i: string]: string[];
}

interface ReturnPlaylist {
	artists: Artists;
	songs: string[];
	time: number;
}

export const unrollPlaylist = (items: UnrollPlaylist[]): ReturnPlaylist => {
	const playlist: ReturnPlaylist = {
		artists: {},
		songs: [],
		time: 0,
	};

	for (const item of items) {
		if (item.type === "album") {
			for (const song of item.songs) {
				helpers(song, playlist);
			}
		}

		if (item.type === "playlist") {
			const resolvedPlaylist = item.resolve();

			for (const song of resolvedPlaylist) {
				helpers(song, playlist);
			}
		}

		if (item.type === "song") {
			helpers(item, playlist);
		}
	}

	return playlist;
};

function helpers(song: Song, playlist: ReturnPlaylist) {
	if (Array.isArray(song.artist)) {
		for (let index = 0; index < song.artist.length; index += 1) {
			const key = song.artist[index];
			helpersKey(key, song, playlist);
		}
	} else {
		const key = song.artist;
		helpersKey(key, song, playlist);
	}
}

function helpersKey(key: string, song: Song, playlist: ReturnPlaylist) {
	if (playlist.artists[key]) {
		playlist.artists[key].push(song.name);
	} else {
		playlist.artists[key] = [song.name];
	}

	if (!playlist.songs.includes(song.name)) {
		playlist.songs.push(song.name);
		playlist.time += song.length;
	}
}
