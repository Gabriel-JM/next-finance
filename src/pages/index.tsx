import Head from 'next/head'
import Title from '../components/general/title'
import { formatBrCurrency } from '../resources/currency'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Finance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title />

        <div>
          <h3>Saldo</h3>
          <p>{formatBrCurrency(0)}</p>
        </div>

        <div>
          <h3>Entradas</h3>
          <p>{formatBrCurrency(0)}</p>
        </div>

        <div>
          <h3>Saída</h3>
          <p>{formatBrCurrency(0)}</p>
        </div>
      </main>
    </div>
  )
}
