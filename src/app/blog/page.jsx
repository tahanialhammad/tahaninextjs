import Link from "next/link";
import styles from "./blog.module.css";
import Image from "next/image";

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <Link href="/id" className={styles.post}>
        <div className={styles.postImg}>
          {/*  configure under images in your `next.config.js` */}
          <Image
            className={styles.img}
            src={
              "https://images.pexels.com/photos/13352373/pexels-photo-13352373.jpeg"
            }
            width={350}
            height={250}
            alt="Post image"
          />
        </div>

        <div className={styles.postBody}>
          <h1 className={styles.postTitle}>post title</h1>
          <p className={styles.postText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla iure
            aspernatur, tempora sed a placeat at neque explicabo quas, tenetur
            quo. Totam saepe incidunt illo tenetur sint quisquam rem a!
          </p>
        </div>
      </Link>

      <Link href="/id" className={styles.post}>
        <div className={styles.postImg}>
          {/*  configure under images in your `next.config.js` */}
          <Image
            className={styles.img}
            src={
              "https://images.pexels.com/photos/13352373/pexels-photo-13352373.jpeg"
            }
            width={350}
            height={250}
            alt="Post image"
          />
        </div>

        <div className={styles.postBody}>
          <h1 className={styles.postTitle}>post title</h1>
          <p className={styles.postText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla iure
            aspernatur, tempora sed a placeat at neque explicabo quas, tenetur
            quo. Totam saepe incidunt illo tenetur sint quisquam rem a!
          </p>
        </div>
      </Link>
      <Link href="/blog/id" className={styles.post}>
        <div className={styles.postImgContainer}>
          {/*  configure under images in your `next.config.js` */}
          <Image
            className={styles.postImg}
            src={
              "https://images.pexels.com/photos/13352373/pexels-photo-13352373.jpeg"
            }
            width={350}
            height={250}
            alt="Post image"
          />
        </div>

        <div className={styles.postBody}>
          <h1 className={styles.postTitle}>post title</h1>
          <p className={styles.postText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla iure
            aspernatur, tempora sed a placeat at neque explicabo quas, tenetur
            quo. Totam saepe incidunt illo tenetur sint quisquam rem a!
          </p>
        </div>
      </Link>
    </div>
  );
}
