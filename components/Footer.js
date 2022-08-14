import styles from "../styles/Footer.module.scss";
import Image from "next/image";
import Head from "next/head";
import Qrcode from "../public/img/Qr-code.png"

const Footer = () => {
  return (
    <>
    <Head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
    />
  </Head>
    <footer className={styles.footer}>
      <div className={styles.gridfooter}>
        <div className={styles.contentleft}>
          <h2>ที่อยู่ติดต่อ</h2>
          <p>30 / 1 ม.6 ต.หมอนนาง อ.พนัสนิคม จ.ชลบุรี 20140</p>
          <div className={styles.wrapcontact}>
            <div className={styles.contact}>
              <h2><i className="bi bi-envelope-fill"></i>Email</h2>
              <p>charoensup.recycle@hotmail.com</p>
            </div>
            <div className={styles.contact}>
              <h2><i className="bi bi-telephone-fill"></i>Phone</h2>
              <p>095-979-4544, 081-4674084, 096-896-5251</p>
            </div>
          </div>
        </div>
        <div className={styles.contentright}>
            <Image  src={Qrcode}
           alt="qr-code"
           width="150px"
           height="150px"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© Copyright 2022</p>
      </div>
    </footer>
    </>
  );
};
export default Footer;
