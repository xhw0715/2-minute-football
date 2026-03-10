import gamesData from "@/data/games.json";

export function getGameSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getAllGames() {
  return gamesData.filter((game) => game.title && game.iframe_url);
}

export function getGameBySlug(slug) {
  return gamesData.find((game) => {
    const gameSlug = getGameSlug(game.title);
    return gameSlug === slug;
  });
}

export function getAllGameSlugs() {
  return getAllGames().map((game) => getGameSlug(game.title));
}
