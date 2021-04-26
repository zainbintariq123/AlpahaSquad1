import Head from 'next/head';
import Graph from '../components/Graph';
export default function Card() {
  return (
    <div>
      <Head>
        <title>AquaSquad Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-400 h-screen">
        <Graph />
      </main>

    </div>
  )
}
