import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.scss";
import ImageAbout1 from "../public/img/wallpaper-2.jpg";
import ImageAbout2 from "../public/img/BG-New1.png";
const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - JRS Thailand Co.,Ltd.</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.titleabout}>
          <h2>เกี่ยวกับเรา</h2>
          <p></p>
        </div>
        <div className={styles.wrapabout}>
          <div className={styles.imageabout}>
            <Image
              src={ImageAbout1}
              alt="image-about1"
              width={500}
              height={300}
            />
          </div>
          <div className={styles.descabout}>
            <h2>จ.เจริญทรัพย์ รีไซเคิล (JRS) จำกัด</h2>
            <p>
              <strong>
                บริการ ซื้อ-ขาย และให้เช่า พาเลทพลาสติก , ใหม่ , มือสอง ,
                แตกชำรุด
              </strong>
            </p>
            <p>
              ทางบริษัทของเรา รับซื้อ-พาเลทพลาสติก
              มือสองใช้งานแล้วและแตกหักชำรุด เนื้อPP,HD ทุกชนิด และยัง
              รับซื้อ-พาร์ทรถยนต์ที่ฉีดขึ้นรูปเสีย
              เพื่อนำมาบดโม่ทำลายนำกลับไปรีไซเคิล
            </p>
            <p>
              ขาย และ เช่า พาเลทพลาสติกมือสอง ที่มีคุณภาพทนทานรับนน.สินค้าได้ดี
              ทางเราแนะนำได้ตรงจุดในการใช้งาน และท่านสามารถขายคืนให้กับทางเราได้
              เมื่อชิ้นงานของท่านใช้จนคุ้มค่าแตกหักไปแล้ว
              เรายินดีรับซื้อคืนหรือเครมตัวใหม่
            </p>
            <p>
              และทางเรายังมีประสิทธิภาพในการขนส่ง ซื้อ-ขาย-เช่า
              บริการอย่างรวดเร็ว เป็นนโยบายจุดขายของเราที่ใส่ใจลูกค้าและเข้าถึง
            </p>
            <p>
              บริษัทของเราตั้งเป้าหมายให้ลูกค้า ครบ จบ ที่เรา
              เพื่อครอบคุมในการบริการดูแลลูกค้าอย่างครบวงจร
              เราต้องการดูแลเข้าถึง ลูกค้าอุตสาหกรรม และ
              ลูกค้าบุคคลทั่วไปโดยง่าย จำนวนมาก-น้อย เราพร้อมให้บริการ
            </p>
          </div>
          <div className={styles.descabout}>
            <h2>ธุรกิจหลักขององค์กร</h2>
            <p>
              เป็นตัวแทนจำหน่าย ขายเม็ดพลาสติกPP,HD ซื้อ-ขาย และให้เช่า
              พาเลทพลาสติกมือสองคุณภาพ กลุ่มลูกค้าหลักของเราเป็น บริษัทเอกชน
              หน่วยงานราชการ และลูกค้าบุคคลทั่วไป
              เรามุ่งมั่นจะเป็นตัวแทนจำหน่ายสินค้าอุตสาหกรรมชั้นแนวหน้า
              ของประเทศไทย ด้วยการส่งเสริมพัฒนาความรู้บุคลากร
              และส่งเสริมปัจจัยในการขายต่างๆ อย่างสม่ำเสมอและต่อเนื่อง
            </p>
          </div>
          <div className={styles.imageabout}>
            <Image
              src={ImageAbout2}
              alt="image-about2"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
