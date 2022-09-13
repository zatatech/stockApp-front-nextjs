import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <h1>Home</h1>
        <div>
          <Link href='/products/create'>Crea pdto</Link>
          <Link href='/people/create'>Crea person</Link>
        </div>
    </div>
  )
}

