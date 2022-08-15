import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.scss"
const Contact : NextPage = () => {
    return (
        <> 
        <Head>
        <title>Contact - JRS Thailand Co.,Ltd.</title>
        </Head>
        <div className={styles.container}>
            <div className={styles.titlecontact}>
                <h2>ติดต่อเรา</h2>
                <p></p>
            </div>
            <div className={styles.wrapcontact}>
                <div className={styles.titletextcontact}>
                    <h2>จ.เจริญทรัพย์ รีไซเคิล จำกัด</h2>
                </div>
                <div className={styles.desccontact}>
                    <p><i className="bi bi-geo-alt"></i><strong>ที่อยู่</strong> : <span>30 / 1 ม.6 ต.หมอนนาง อ.พนัสนิคม จ.ชลบุรี 20140</span></p>
                    <p><i className="bi bi-telephone"></i><strong>เบอร์โทร</strong> : <span>095-979-4544, 081-4674084, 096-896-5251</span></p>
                    <p><i className="bi bi-envelope"></i><strong>อีเมล</strong> : <span>charoensup.recycle@hotmail.com</span></p>
                    <p><i className="bi bi-line"></i><strong>ไลน์</strong> : <span> bewpanus</span></p>
                </div>
            </div>
            <div className={styles.mapcontact}>
                <h2>Map</h2>
            </div>
        </div>
        </>

    )
}
export default Contact