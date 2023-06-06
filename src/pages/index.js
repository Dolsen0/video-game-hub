import React from 'react';
import styles from '../app/page.module.css';
import Image from 'next/image';

export default function Home({ games }) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Video Game Hub</h1>
        {games.map((game) => (
          <div key={game.id}>
            <h3>{game.name}</h3>
            <div className={styles.imageContainer}>
              <Image
                src={game.background_image}
                alt={game.name}
                width={500}
                height={300}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const { getGames } = require('../functions/getGames');
  const games = await getGames();
  return {
    props: {
      games,
    },
  };
}
