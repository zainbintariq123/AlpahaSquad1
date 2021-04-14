import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Mobile from '../components/Mobile/mobile';
export default function MobilePage() {
  return (
    <div>
      <Head>
        <title>AquaSquad Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-200 h-screen">
        <Mobile />
      </main>
    </div>
  )
}
