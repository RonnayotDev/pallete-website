import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Navbar.module.scss";
import Logo from "../public/img/JRS__3.png"

const Navbar = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.gridnav}>
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width="129.5px"
              height="120.5px"
            />
          </Link>
          <div className={styles.wrappertop}>
            <div className={styles.texttop}>
              <p><strong>จ.เจริญทรัพย์ รีไซเคิล จำกัด</strong></p>
              <p>30 / 1 ม.6 ต.หมอนนาง อ.พนัสนิคม จ.ชลบุรี 20140</p>
              <p>เลขทะเบียนนิติบุคคล 020-3562-0023-33</p>
            </div>
            <div className={styles.contacttop}>
            <p><i className="bi bi-envelope-fill" ></i>: charoensup.recycle@hotmail.com</p>
            <p><i className="bi bi-telephone-fill"></i>: 095-979-4544 , 081-4674084 , 096-896-5251</p>
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href="/">หน้าแรก</Link>
            </li>
            <li>
              <Link href="/about">เกี่ยวกับเรา</Link>
            </li>
            <li>
              <Link href="/store">สินค้า</Link>
            </li>
            <li className={styles.button}>
              <Link href="/contact" >
                ติดต่อ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
