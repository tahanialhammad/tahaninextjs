import Link from "next/link";
import styles from "./products.module.css";
import Image from "next/image";

// Get Data from free Api  https://dummyjson.com/
async function getData() {
  const res = await fetch('https://dummyjson.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Products() {
  const data = await getData()
  const products = data.products

  return (
    <div className={styles.productsContainer}>
      {
        products.map(product => (
              <Link href="/products/id" className={styles.post} key={product.id}>
              <div className={styles.imgContainer}>
                {/*  configure under images in your `next.config.js` */}
                <Image
                  className={styles.image}
                  src={product.thumbnail}
                  width={350}
                  height={250}
                  alt="Post image"
                />
              </div>
      
              <div className={styles.body}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.text}>{product.description}</p>
              </div>
            </Link>
        ))
      }
    </div>
  );
}
