'use client';
import styles from './page.module.css'
import Button from '@/components/button/button'

export default function Home() {
  return (
    <main className={styles.main}>
      <Button onClick={() => {}} inversed={true}>
        Get started
      </Button>
    </main>
  )
}
