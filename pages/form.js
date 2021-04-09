import Head from 'next/head'
import NewsLetter from '../components/newsLetter/newletter';
export default function Card() {
  return (
    <div>
      <Head>
        <title>AquaSquad Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-300">
        <NewsLetter />
      </main>

    </div>
  )
}
