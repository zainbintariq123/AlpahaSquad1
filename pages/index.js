import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Transaction from '../components/Transactions/transactions';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AquaSquad Task</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
      </Head>

      <main>
        <Transaction />
      </main>

    </div>
  )
}
