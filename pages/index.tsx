import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Imagecontent1 from "../public/img/wallpaper-1.png";
import icon1 from "../public/img/Icon-1.png";
import icon2 from "../public/img/Icon-2.png";
import icon3 from "../public/img/Icon-3.png";
import Imagecontent31 from "../public/img/reward3.jpg";
import Imagecontent32 from "../public/img/reward2.jpg";
import Imagecontent33 from "../public/img/reward7.jpg";
import Imagecontent34 from "../public/img/reward4.jpg";
import Imagecontent35 from "../public/img/reward5.jpg";
import Imagecontent36 from "../public/img/reward6.jpg";
import Imagecontent41 from "../public/img/pallete1.png";
import Imagecontent42 from "../public/img/pallete4.png";
import Imagecontent43 from "../public/img/pallete7.png";
import Imagecontent51 from "../public/img/item1.jpg";
import Imagecontent52 from "../public/img/item2.jpg";
import Imagecontent53 from "../public/img/item3.jpg";

// const dataContent2 = [
//   {
//     imageIcon: "../public/img/Icon-1.png",
//     title: "ถูกสุขลักษณะ และ ทนทาน",
//     desc: "พาเลทพลาสติกของเราทั้งหมดสามารถนำกลับมารีไซเคิลได้และเป็นมิตรต่อสิ่งแวดล้อม",
//   },
//   {
//     imageIcon: "../public/img/Icon-2.png",
//     title: "สินค้าที่มีคุณภาพเหมาะสมกับราคา",
//     desc: "คำนึงถึงความคุ้มค่าในการใช้งานผลิตภัณฑ์เราจึงคัดสรรค์สินค้าที่คุณภาพสูงในราคาเหมาะสม",
//   },
//   {
//     imageIcon: "../public/img/Icon-3.png",
//     title: "การบริการจัดส่ง",
//     desc: "มีการบริการจัดส่งฟรี (เงื่อนไขเป็นไปตามข้อกำหนดของบริษัทฯ)",
//   },
// ];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JRS Thailand Co.,Ltd.</title>
      </Head>
      <div className={styles.herobanner}>
        <div className={styles.captionbanner}>
          <h2>
            บริการ-ซื้อ ขาย ให้เช่า
            <br className={styles.br728} /> พาเลทพลาสติก <br /> ใหม่, มือสอง,
            ชำรุด, ทุกชนิด
          </h2>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.content1left1}>
          <div className={styles.content1left}>
            <Image
              src={Imagecontent1}
              alt="wallpaper-1"
              width={500}
              height={400}
            />
          </div>
        </div>
        <div className={styles.content1right}>
          <h2>จ.เจริญทรัพย์ รีไซเคิล (JRS) จำกัด</h2>
          <p>
            <strong>
              บริการ ซื้อ-ขาย และให้เช่า พาเลทพลาสติก , ใหม่ , มือสอง , แตกชำรุด
            </strong>
          </p>
          <p>
            ทางบริษัทของเรา รับซื้อ-พาเลทพลาสติก มือสองใช้งานแล้วและแตกหักชำรุด
            เนื้อPP,HD ทุกชนิด และยัง รับซื้อ-พาร์ทรถยนต์ที่ฉีดขึ้นรูปเสีย
            เพื่อนำมาบดโม่ทำลายนำกลับไปรีไซเคิล
          </p>
          <button>
            <Link href="/about">เพิ่มเติม</Link>
          </button>
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.titlecontent2}>
          <h2>ข้อดีของการซื้อ-ขาย กับเรา</h2>
          <p>ใช้งานง่าย รูปทรง สี่เหลี่ยม วางของง่าย เคลื่อนย้ายสะดวก</p>
        </div>
        <div className={styles.content2content}>
          <div className={styles.itemcontent2}>
            <div className={styles.imagecontent2}>
              <Image src={icon1} alt="icon-1" width={150} height={150} />
            </div>
            <div className={styles.detailcontent2}>
              <h4>ถูกสุขลักษณะ และ ทนทาน</h4>
              <p>
                พาเลทพลาสติกของเราทั้งหมด สามารถนำกลับมารีไซเคิลได้และ
                เป็นมิตรต่อสิ่งแวดล้อม
              </p>
            </div>
          </div>
          <div className={styles.itemcontent2}>
            <div className={styles.imagecontent2}>
              <Image src={icon2} alt="icon-2" width={150} height={150} />
            </div>
            <div className={styles.detailcontent2}>
              <h4>สินค้าที่มีคุณภาพเหมาะสมกับราคา</h4>
              <p>
                คำนึงถึงความคุ้มค่าในการใช้งานผลิตภัณฑ์
                เราจึงคัดสรรค์สินค้าที่คุณภาพสูงในราคาเหมาะสม
              </p>
            </div>
          </div>
          <div className={styles.itemcontent2}>
            <div className={styles.imagecontent2}>
              <Image src={icon3} alt="icon-3" width={150} height={150} />
            </div>
            <div className={styles.detailcontent2}>
              <h4>การบริการจัดส่ง</h4>
              <p>
                มีการบริการจัดส่งฟรี <br />
                (เงื่อนไขเป็นไปตามข้อกำหนดของบริษัทฯ)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content3}>
        <div className={styles.titlecontent3}>
          <h2>ผลงานของเรา</h2>
          <p>
            สามารถจัดการเคลียร์หน้างานที่ชนะประมูล 300ตัน หรือ 15,000ตัว <br />
            ภายในระยะเวลาไม่เกิน 3-4วัน
            ทีมงานของเราพร้อมและเชี่ยวชาญในด้านให้บริการลูกค้า
          </p>
        </div>
        <div className={styles.wrapcontent3}>
          <div className={styles.itemcontent3}>
            <div className={styles.imagecontent3}>
              <Image
                src={Imagecontent31}
                alt="image-content31"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={styles.itemcontent3}>
            <div className={styles.imagecontent3}>
              <Image
                src={Imagecontent32}
                alt="image-content32"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={styles.itemcontent3}>
            <div className={styles.imagecontent3}>
              <Image
                src={Imagecontent33}
                alt="image-content33"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className={styles.textcontent3}>
          <p>
            ทางบริษัทของเรามีรถพร้อมบริการลูกค้า ไปรับไปส่งของได้ถึงที่ทุกวัน
            <i className="bi bi-fire" />
          </p>
        </div>
        <div className={styles.wrapcontent3}>
          <div className={styles.itemcontent3}>
            <div className={styles.imagecontent3}>
              <Image
                src={Imagecontent34}
                alt="image-content34"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={styles.itemcontent3}>
            <div className={styles.imagecontent3}>
              <Image
                src={Imagecontent35}
                alt="image-content35"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={styles.itemcontent3}>
            <div className={styles.imagecontent3}>
              <Image
                src={Imagecontent36}
                alt="image-content36"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content4}>
        <div className={styles.titlecontent4}>
          <h2>สินค้ายอดนิยม</h2>
          <p>พาเลทพลาสติก ใช้งานสภาพดี มีให้เลือกหลายแบบ</p>
        </div>
        <div className={styles.wrapcontent4}>
          <div className={styles.itemcontent4}>
            <div className={styles.imagecontent4}>
              <Image
                src={Imagecontent41}
                alt="image-content41"
                width={290}
                height={290}
              />
            </div>
            <div className={styles.titleitemcontent4}>
              <h2>พาเลทสีฟ้า</h2>
            </div>
            <div className={styles.descitemcontent4}>
              <div className={styles.svgdesc}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color="blue"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>ขนาด 110x110x15</p>
              </div>
              <div className={styles.svgdesc}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color="blue"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>เนื้อ HDPE</p>
              </div>
              <div className={styles.svgdesc}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color="blue"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>น้ำหนักเบา , รับน้ำหนักได้ดี</p>
              </div>
            </div>
            <button>
              <Link href="/store">ดูเพิ่มเติม</Link>
            </button>
          </div>
          <div className={styles.itemcontent4}>
            <div className={styles.imagecontent4}>
              <Image
                src={Imagecontent42}
                alt="image-content42"
                width={290}
                height={290}
              />
            </div>
            <div className={styles.titleitemcontent4}>
              <h2>พาเลทสีดำ</h2>
            </div>
            <div className={styles.descitemcontent4}>
              <div className={styles.svgdesc}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color="blue"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>ขนาด 110x110x12</p>
              </div>
              <div className={styles.svgdesc}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color="blue"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>เนื้อ PP</p>
              </div>
              <div className={styles.svgdesc}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color="blue"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>น้ำหนักเบา , รับน้ำหนักได้ดี</p>
              </div>
            </div>
            <button>
              <Link href="/store">ดูเพิ่มเติม</Link>
            </button>
          </div>
          <div className={styles.itemcontent4}>
            <div className={styles.imagecontent4}>
              <Image
                src={Imagecontent43}
                alt="image-content43"
                width={290}
                height={290}
              />
            </div>
            <div className={styles.titleitemcontent4}>
              <h2>หลุมดำ</h2>
            </div>
            <div className={styles.descitemcontent4}>
              <div className={styles.svgdesc}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color="blue"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>ขนาด 105x105x14</p>
              </div>
              <div className={styles.svgdesc}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color="blue"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>เนื้อ PP</p>
              </div>
              <div className={styles.svgdesc}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color="blue"
                  width={20}
                  height={20}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>เหมาะกับสินค้าที่มีน้ำหนักมาก</p>
              </div>
            </div>
            <button>
              <Link href="/store">ดูเพิ่มเติม</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.content5}>
        <div className={styles.titlecontent5}>
          <h2>รับซื้อสินค้า</h2>
          <p>
            รับซื้อ-พาเลทพลาสติก มือสองใช้งานแล้วและแตกหักชำรุด เนื้อPP,HD
            ทุกชนิด
          </p>
        </div>
        <div className={styles.textcontent5}>
          <p>
            รับซื้อพลาสติกฉีดขึ้นรูปเสีย
            เรามีทีมงานพร้อมบริการนำมาทำลายรีไซเคิลใหม่{" "}
            <i className="bi bi-recycle"></i>
          </p>
        </div>
        <div className={styles.wrapcontent5}>
          <div className={styles.imagecontent5}>
            <Image
              src={Imagecontent51}
              alt="image-content51"
              width={280}
              height={280}
            />
          </div>
          <div className={styles.imagecontent5}>
            <Image
              src={Imagecontent52}
              alt="image-content52"
              width={280}
              height={280}
            />
          </div>
          <div className={styles.imagecontent5}>
            <Image
              src={Imagecontent53}
              alt="image-content53"
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
