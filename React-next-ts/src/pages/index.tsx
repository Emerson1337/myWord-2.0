import Head from 'next/head'
import { useEffect } from 'react'
import { IndexStart } from '../components/indexStart'
import api from '../services/api'

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
