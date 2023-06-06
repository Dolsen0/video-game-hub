export const getGames = async () => {
  try {
    const games = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages) {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.RAWG}&page=${page}`
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.error(errorData);
        throw new Error("Failed to fetch games");
      }

      const data = await res.json();
      games.push(...data.results);
      totalPages = data.total_pages;
      page++;
    }

    return games;
  } catch (error) {
    console.error(error);
  }
};
