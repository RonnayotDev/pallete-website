import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/NavbarMobile.module.scss";
import Logo from "../public/img/JRS__3.png"
import React, { useState } from "react";
import Hamburger from "./Hamburger";

const NavbarMobile: React.FC<any> = (props: any) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
				/>
			</Head>
			<Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
			<nav className={styles.nav}>
				<div className={styles.navwrapper}>
					<div className={styles.navcompanycontainer}>
						<Link href="/">
							<Image
								src={Logo}
								alt="Logo"
								width="60px"
								height="54px"
								objectFit="contain"
							/>
						</Link>
						<div className={styles.companycontainer}>
							<p className={styles.headerText1}>จ.เจริญทรัพย์ รีไซเคิล จำกัด</p>
							<p className={styles.headerText}>30 / 1 ม.6 ต.หมอนนาง อ.พนัสนิคม จ.ชลบุรี 20140</p>
							<p className={styles.headerText}>เลขทะเบียนนิติบุคคล 020-3562-0023-33</p>
						</div>
					</div>
					<i className={`${styles.hamburger} bi bi-list`} onClick={() => setIsOpen(true)}></i>
				</div>

				<div className={styles.contactwrapper1}>
					<div className={styles.contactwrapper}>
						<i className={`${styles.contacticon} bi bi-envelope-fill`}></i>
						<p className={styles.headerText}>: charoensup.recycle@hotmail.com</p>
					</div>
					<div className={styles.contactwrapper}>
						<i className={`${styles.contacticon} bi bi-telephone-fill`}></i>
						<p className={styles.headerText}>: 095-979-4544 , 081-4674084 , 096-896-5251</p>
					</div>
				</div>
			</nav>
		</>
	)
};

export default NavbarMobile;
