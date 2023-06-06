import Image from 'next/image'
import styles from './page.module.css'
import getGames from '@/functions/getGames';


export default async function Home() {
  const games = await getGames()
  console.log(games)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Video Game Hub</h1>
      </div>
    </main>
  )
}
