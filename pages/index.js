import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Transaction from '../components/Transactions/transactions';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AquaSquad Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Transaction />
      </main>

    </div>
  )
}
