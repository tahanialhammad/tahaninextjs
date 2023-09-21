"use client"
import Link from "next/link";
import styles from "./navBar.module.css";
import { links } from "./navdata";
import Button from "../Button/Button";

export default function NavBar() {
    return (
      <div className={styles.container}>
          <Link href="/" className={styles.logo}>Logo</Link>

          <div className={styles.links}>
            {links.map(link =>
            <Link key={link.id} href={link.url}  className={styles.link}>{link.title} </Link>    
              )}

        <Button/>
            
          </div>
      </div>
    )
  }
  