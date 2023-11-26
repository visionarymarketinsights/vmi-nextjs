import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <div>
        Home
      </div>
      <Link href={'/dashboard'}>
        Dashboard
      </Link>
    </div>
  )
}
