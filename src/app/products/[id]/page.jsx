import styles from "./page.module.css"
import Image from "next/image";


async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Slug({params}) {
  const product = await getData(params.id)

  return (
    <div className={styles.container}>
      <header className={styles.postHeader}>
        <div className={styles.info}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imgContainer}>
        <Image
            className={styles.image}
            src={product.thumbnail}
            alt="Post image"
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map(image => (
            <Image 
            key={product.id}
            src={image}
            height={150}
            width={150}
            />
          ))}
        </div>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, beatae. Fuga illo nam obcaecati, eius nesciunt dolores perspiciatis totam aperiam sint recusandae, sunt delectus eos dolor, ipsa sequi consequatur facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ratione, quibusdam illo quaerat iusto adipisci asperiores expedita iure iste modi dolore delectus fugiat doloremque rerum unde est deserunt officiis provident? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam molestias ut sit delectus pariatur perspiciatis voluptates iste cum corrupti laudantium accusamus non nam, at natus amet voluptatem obcaecati. Iusto, adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis cupiditate, obcaecati accusantium ducimus voluptatum dolorum laudantium vitae, sequi minima similique autem qui distinctio quisquam quod? Quasi nobis labore sint.</p>
      </div>
    </div>
  )
}
