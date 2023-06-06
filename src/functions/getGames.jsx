const getGames = async () => {
    try {
      const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG}`);
      if (!res.ok) {
        const errorData = await res.json();
        console.error(errorData);
        throw new Error("Failed to fetch games");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export default getGames;
  