import styles from "./page.module.css"
import Image from "next/image";

export default function Slug() {
  return (
    <div className={styles.container}>
      <header className={styles.postHeader}>
        <div className={styles.info}>
        <h1 className={styles.title}>post title</h1>
        <p className={styles.desc}>description</p>
        </div>
        <div className={styles.imgContainer}>
        <Image
            className={styles.image}
            src={
              "https://images.pexels.com/photos/18378793/pexels-photo-18378793/free-photo-of-natuurkind.jpeg"
            }
            alt="Post image"
            fill={true}
          />
          <span className={styles.author}>tahani</span>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, beatae. Fuga illo nam obcaecati, eius nesciunt dolores perspiciatis totam aperiam sint recusandae, sunt delectus eos dolor, ipsa sequi consequatur facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ratione, quibusdam illo quaerat iusto adipisci asperiores expedita iure iste modi dolore delectus fugiat doloremque rerum unde est deserunt officiis provident? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestias ut sit delectus pariatur perspiciatis voluptates iste cum corrupti laudantium accusamus non nam, at natus amet voluptatem obcaecati. Iusto, adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis cupiditate, obcaecati accusantium ducimus voluptatum dolorum laudantium vitae, sequi minima similique autem qui distinctio quisquam quod? Quasi nobis labore sint.</p>
      </div>
    </div>
  )
}
