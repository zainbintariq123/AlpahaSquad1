import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hackers from '../components/Hackers/hacker.component';
export default function Card() {
  return (
    <div>
      <Head>
        <title>AquaSquad Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-400 h-screen">
        <Hackers />
      </main>

    </div>
  )
}
