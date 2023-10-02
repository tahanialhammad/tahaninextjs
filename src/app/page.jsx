import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/images/hero.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Tahani Next Js Project</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis corrupti omnis delectus laudantium! Autem, officiis tempore. Eligendi corporis quas voluptas amet, harum exercitationem deserunt minus quo sit soluta corrupti.</p>
        <button className={styles.btnPrimary}>More information</button>
      </div>
      <div className={styles.col}>
        <Image src={Hero} className={styles.img}/>
      </div>
Lateste update befor delete from laptop
    </div>
  )
}
