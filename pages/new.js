import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hackers from '../components/Hackers/hacker.component';
import Main from '../components/Second/Main/main';
export default function Card() {
  return (
    <div>
      <Head>
        <title>AquaSquad Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container m-auto">
        <Main />
      </main>
    </div>
  )
}
