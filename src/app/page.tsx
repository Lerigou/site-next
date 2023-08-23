import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/button'

export default function Home() {
  return (
    <main className={styles.main}>
      <Button onClick={() => {}}>
        Get started
      </Button>
    </main>
  )
}
