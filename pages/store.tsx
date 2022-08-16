import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Store.module.scss";
import ImageStore1 from "../public/img/pallete1.png";
import ImageStore2 from "../public/img/pallete5.png";
import ImageStore3 from "../public/img/pallete7.png";
import ImageStore4 from "../public/img/pallete10.png";
import ImageStore5 from "../public/img/pallete-blue-1.jpg";
import ImageStore6 from "../public/img/pallete-blue-2.jpg";
import ImageStore7 from "../public/img/pallete-black1.jpg";
import ImageStore8 from "../public/img/pallete-black2.jpg";
import ImageStore9 from "../public/img/pallete-blackhole-2.jpg";
import ImageStore10 from "../public/img/pallete-blackhole-1.jpg";
import ImageStore11 from "../public/img/pallete9.png.jpg";

const Store: NextPage = () => {

  const data = [
    {
      title: "พาเลทสีฟ้า",
      mainImg: ImageStore1,
      tableData: [
        {
          feature: "ขนาด",
          detail: "110x110x15cm",
        },
        {
          feature: "วัสดุ",
          detail: "HDPE",
        },
        {
          feature: "รับน้ำหนักเคลื่อนย้าย",
          detail: "1000 กก.",
        },
        {
          feature: "รับน้ำหนักอยู่กับที่",
          detail: "1500 กก.",
        },
        {
          feature: "การใช้งาน",
          detail: "น้ำหนักเบา , รับน้ำหนักได้ดี",
        },
      ],
      imgs: [
        ImageStore5,
        ImageStore6
      ]
    },
    {
      title: "พาเลทสีดำ",
      mainImg: ImageStore2,
      tableData: [
        {
          feature: "ขนาด",
          detail: "110x110x12cm",
        },
        {
          feature: "วัสดุ",
          detail: "PP",
        },
        {
          feature: "รับน้ำหนักเคลื่อนย้าย",
          detail: "1000 กก.",
        },
        {
          feature: "รับน้ำหนักอยู่กับที่",
          detail: "1200 กก.",
        },
        {
          feature: "การใช้งาน",
          detail: "น้ำหนักเบา , รับน้ำหนักได้ดี",
        },
      ],
      imgs: [
        ImageStore7,
        ImageStore8
      ]
    },
    {
      title: "หลุมดำ",
      mainImg: ImageStore3,
      tableData: [
        {
          feature: "ขนาด",
          detail: "105x105x14cm",
        },
        {
          feature: "วัสดุ",
          detail: "PP",
        },
        {
          feature: "รับน้ำหนักเคลื่อนย้าย",
          detail: "700 กก.",
        },
        {
          feature: "รับน้ำหนักอยู่กับที่",
          detail: "1200 กก.",
        },
        {
          feature: "การใช้งาน",
          detail: "น้ำหนักเบา , รับน้ำหนักได้ดี",
        },
      ],
      imgs: [
        ImageStore9,
        ImageStore10
      ]
    },
    {
      title: "พาเลทสีเหลือง",
      mainImg: ImageStore4,
      tableData: [
        {
          feature: "ขนาด",
          detail: "110x110x16cm",
        },
        {
          feature: "วัสดุ",
          detail: "HDPE",
        },
        {
          feature: "รับน้ำหนักเคลื่อนย้าย",
          detail: "1000 กก.",
        },
        {
          feature: "รับน้ำหนักอยู่กับที่",
          detail: "1500 กก.",
        },
        {
          feature: "การใช้งาน",
          detail: "น้ำหนักเบา , รับน้ำหนักได้ดี",
        },
      ],
      imgs: [
        '/img/vdo-pallete-yellow.mp4',
        ImageStore11
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Store - JRS Thailand Co.,Ltd.</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.titlestore}>
          <h2>สินค้า - ขาย/ให้เช่า</h2>
          <p className={styles.desstore}>
            ขาย และ เช่า พาเลทพลาสติกมือสอง ที่มีคุณภาพทนทานรับนน.สินค้าได้ดี
            ทางเราแนะนำได้ตรงจุดในการใช้งาน และท่านสามารถขายคืนให้กับทางเราได้
            เมื่อชิ้นงานของท่านใช้จนคุ้มค่าแตกหักไปแล้ว
          </p>
        </div>
        <div className={styles.containertore}>
          {data.map((item, index) => (
            <div className={styles.borderstore} key={index}>
            <h2 className={styles['borderstoretitle']}>{item.title}</h2>
              <div className={styles.innerborderstore} key={index}>


                <div className={styles.wrapstore}>

                  <div className={styles.imagestore}>
                    <div className={styles.imagestorewrapper}>
                      <Image
                        src={item.mainImg}
                        alt="image-store-1"
                        width={210}
                        height={160}
                        objectFit="contain"
                      />
                    </div>
                  </div>

                  <div className={styles.tablestore}>
                    <table>
                      <thead>
                        <tr>
                          <th>Featured</th>
                          <th>Detail</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.tableData.map(tableData => (
                          <tr>
                            <td>{tableData.feature}</td>
                            <td>{tableData.detail}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button>
                      <Link href="/contact">สอบถามราคา</Link>
                    </button>
                  </div>

                </div>
                <div className={styles.howtostore}>
                  <div className={styles.titlehowtostore}>
                    <h2 className='borderstoresubtitle'>รูปภาพ/วีดีโอ การใช้งาน</h2>
                    <p></p>
                  </div>
                  <div className={styles.wraphowtostore}>
                    {item.imgs.map(img => (
                      <div className={styles.imagehowtostore}>
                        {typeof img === 'string' ? (
                          <video className={styles.video} controls src={img} />
                        ) : (
                          <Image
                            src={img}
                            alt="image-store-5"
                            width={380}
                            height={380}
                          />
                        )}
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Store;
