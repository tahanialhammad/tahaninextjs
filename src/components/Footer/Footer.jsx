import Image from "next/image";
import styles from "./footer.module.css";
import { social_media } from "./data";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>© 2023 TahaniNextJs </div>
      <div className={styles.social}>
        {social_media.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.icon}.png`}
            width={20}
            height={20}
            className={styles.icon}
            alt="{media.icon}"
          />
        ))}
      </div>
    </div>
  );
}
