import { UserButton } from '@clerk/nextjs'
import { Button } from '@components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <Link href='/dashboard'>
          <Button variant='default'>
              sign in
          </Button>
        </Link>
    </main>
  )
}
