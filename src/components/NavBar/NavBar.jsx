import Link from "next/link";
import styles from "./navBar.module.css";
import { links } from "./navdata";
import Button from "../../elements/Button/Button";
import Logo from "../../elements/Logo/Logo"

export default function NavBar() {
    return (
      <div className={styles.container}>
        <Logo/>

          <div className={styles.links}>
            {links.map(link =>
            <Link key={link.id} href={link.url}  className={styles.link}>{link.title} </Link>    
              )}

        <Button/>
            
          </div>
      </div>
    )
  }
  