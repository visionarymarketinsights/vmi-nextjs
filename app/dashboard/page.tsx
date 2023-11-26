import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>
        Dashboard
      </div>
      <Link href={'/'}>Home</Link>
    </div>
  )
}