import Head from 'next/head'
import { IndexStart } from '../components/indexStart'

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>My Words</title>
      </Head>
      <IndexStart />
    </div>
  )
}
