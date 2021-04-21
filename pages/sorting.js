import Head from 'next/head'
import Sorting from '../components/sorting';
export default function Sort() {
  return (
    <div>
      <Head>
        <title>AquaSquad Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        <Sorting />
      </main>
    </div>
  )
}
