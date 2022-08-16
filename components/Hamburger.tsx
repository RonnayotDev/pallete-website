import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react'
import styles from '../styles/Hamburger.module.scss'

const Hamburger: React.FC<{ isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }> = ({ isOpen, setIsOpen }) => {
	const state = isOpen ? styles.open : styles.close

	return (
		<div className={`${styles.hamburger} ${state}`}>
			<i className={`${styles.closebutton} bi bi-x-lg`} onClick={() => setIsOpen(false)}></i>

			<ul className={styles.list}>
				<li className={styles.row}>
					<Link href="/">
						<a className={styles.link} onClick={() => setIsOpen(false)}>
							หน้าแรก
						</a>
					</Link>
				</li>
				<li className={styles.row}>
					<Link href="/about">
						<a className={styles.link} onClick={() => setIsOpen(false)}>
							เกี่ยวกับเรา
						</a>
					</Link>
				</li>
				<li className={styles.row}>
					<Link href="/store">
						<a className={styles.link} onClick={() => setIsOpen(false)}>
							สินค้า
						</a>
					</Link>
				</li>
				<li className={`${styles.row} ${styles.contactbtn}`}>
					<Link href="/contact" >
						<a className={styles.link} onClick={() => setIsOpen(false)}>
							ติดต่อ
						</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Hamburger
