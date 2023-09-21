import styles from "./logo.module.css";
import Link from "next/link";
import { Lobster } from 'next/font/google'
const logoFont = Lobster({ subsets: ['latin'], weight: ['400'] })

export default function Button() {
    return (
        <Link href="/" className={`${styles.logo} ${logoFont.className}`}>Logo</Link>
    )
  }
  