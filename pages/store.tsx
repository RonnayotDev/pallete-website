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
  return (
    <>
      <Head>
          <title>Store - JRS Thailand Co.,Ltd.</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.titlestore}>
          <h2>สินค้า - ขาย/ให้เช่า</h2>
          <p>
            ขาย และ เช่า พาเลทพลาสติกมือสอง ที่มีคุณภาพทนทานรับนน.สินค้าได้ดี
            <br />
            ทางเราแนะนำได้ตรงจุดในการใช้งาน และท่านสามารถขายคืนให้กับทางเราได้
            เมื่อชิ้นงานของท่านใช้จนคุ้มค่าแตกหักไปแล้ว
          </p>
        </div>
        <div className={styles.containertore}>
          <div className={styles.borderstore}>
            <h2>พาเลทสีฟ้า</h2>
            <div className={styles.wrapstore}>
              <div className={styles.imagestore}>
                <Image
                  src={ImageStore1}
                  alt="image-store-1"
                  width={210}
                  height={160}
                />
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
                    <tr>
                      <td>ขนาด</td>
                      <td>110x110x15cm</td>
                    </tr>
                    <tr>
                      <td>วัสดุ</td>
                      <td>HDPE</td>
                    </tr>
                    <tr>
                      <td>รับน้ำหนักเคลื่อนย้าย</td>
                      <td>1000 กก.</td>
                    </tr>
                    <tr>
                      <td>รับน้ำหนักอยู่กับที่</td>
                      <td>1500 กก.</td>
                    </tr>
                    <tr>
                      <td>การใช้งาน</td>
                      <td>น้ำหนักเบา , รับน้ำหนักได้ดี</td>
                    </tr>
                  </tbody>
                </table>
                <button>
                  <Link href="/contact">สอบถามราคา</Link>
                </button>
              </div>
            </div>
            <div className={styles.howtostore}>
              <div className={styles.titlehowtostore}>
                <h2>รูปภาพ/วีดีโอ การใช้งาน</h2>
                <p></p>
              </div>
              <div className={styles.wraphowtostore}>
                <div className={styles.imagehowtostore}>
                  <Image
                    src={ImageStore5}
                    alt="image-store-5"
                    width={380}
                    height={380}
                  />
                </div>
                <div className={styles.imageshowtostore}>
                  <Image
                    src={ImageStore6}
                    alt="image-store-6"
                    width={380}
                    height={380}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.borderstore}>
            <h2>พาเลทสีดำ</h2>
            <div className={styles.wrapstore}>
              <div className={styles.imagestore}>
                <Image
                  src={ImageStore2}
                  alt="image-store-2"
                  width={210}
                  height={160}
                />
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
                    <tr>
                        <td>ขนาด</td>
                        <td>110x110x12cm</td>
                    </tr>
                    <tr>
                        <td>วัสดุ</td>
                        <td>PP</td>
                    </tr>
                    <tr>
                        <td>รับน้ำหนักเคลื่อนย้าย</td>
                        <td>00 กก.</td>
                    </tr>
                    <tr>
                        <td>รับน้ำหนักอยู่กับที่</td>
                        <td>
                            1200 กก.
                        </td>
                    </tr>
                    <tr>
                        <td>การใช้งาน</td>
                        <td>น้ำหนักเบา , รับน้ำหนักได้ดี</td>
                    </tr>
                </tbody>
                </table>
                <button>
                  <Link href="/contact">สอบถามราคา</Link>
                </button>
              </div>
            </div>
            <div className={styles.howtostore}>
              <div className={styles.titlehowtostore}>
                <h2>รูปภาพ/วีดีโอ การใช้งาน</h2>
                <p></p>
              </div>
              <div className={styles.wraphowtostore}>
                <div className={styles.imagehowtostore}>
                  <Image
                    src={ImageStore7}
                    alt="image-store-7"
                    width={380}
                    height={380}
                  />
                </div>
                <div className={styles.imageshowtostore}>
                  <Image
                    src={ImageStore8}
                    alt="image-store-8"
                    width={380}
                    height={380}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.borderstore}>
            <h2>หลุมดำ</h2>
            <div className={styles.wrapstore}>
              <div className={styles.imagestore}>
                <Image
                  src={ImageStore3}
                  alt="image-store-3"
                  width={210}
                  height={160}
                />
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
                <tr>
                    <td>ขนาด</td>
                    <td>105x105x14cm</td>
                </tr>
                <tr>
                    <td>วัสดุ</td>
                    <td>PP</td>
                </tr>
                <tr>
                    <td>รับน้ำหนักเคลื่อนย้าย</td>
                    <td>700 กก.</td>
                </tr>
                <tr>
                    <td>รับน้ำหนักอยู่กับที่</td>
                    <td>
                        1200 กก.
                    </td>
                </tr>
                <tr>
                    <td>การใช้งาน</td>
                    <td>น้ำหนักเบา , รับน้ำหนักได้ดี</td>
                </tr>
            </tbody>
                </table>
                <button>
                  <Link href="/contact">สอบถามราคา</Link>
                </button>
              </div>
            </div>
            <div className={styles.howtostore}>
              <div className={styles.titlehowtostore}>
                <h2>รูปภาพ/วีดีโอ การใช้งาน</h2>
                <p></p>
              </div>
              <div className={styles.wraphowtostore}>
                <div className={styles.imagehowtostore}>
                  <Image
                    src={ImageStore9}
                    alt="image-store-9"
                    width={380}
                    height={380}
                  />
                </div>
                <div className={styles.imageshowtostore}>
                  <Image
                    src={ImageStore10}
                    alt="image-store-10"
                    width={380}
                    height={380}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.borderstore}>
            <h2>พาเลทสีเหลือง</h2>
            <div className={styles.wrapstore}>
              <div className={styles.imagestore}>
                <Image
                  src={ImageStore4}
                  alt="image-store-4"
                  width={210}
                  height={160}
                />
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
            <tr>
                <td>ขนาด</td>
                <td>110x110x16cm</td>
            </tr>
            <tr>
                <td>วัสดุ</td>
                <td>HDPE</td>
            </tr>
            <tr>
                <td>รับน้ำหนักเคลื่อนย้าย</td>
                <td>1000 กก.</td>
            </tr>
            <tr>
                <td>รับน้ำหนักอยู่กับที่</td>
                <td>
                   1500 กก.
                </td>
            </tr>
            <tr>
                <td>การใช้งาน</td>
                <td>น้ำหนักเบา , รับน้ำหนักได้ดี</td>
            </tr>
        </tbody>
                </table>
                <button>
                  <Link href="/contact">สอบถามราคา</Link>
                </button>
              </div>
            </div>
            <div className={styles.howtostore}>
              <div className={styles.titlehowtostore}>
                <h2>รูปภาพ/วีดีโอ การใช้งาน</h2>
                <p></p>
              </div>
              <div className={styles.wraphowtostore}>
                <div className={styles.imagehowtostore}>
                  <Image
                    src={ImageStore11}
                    alt="image-store-11"
                    width={380}
                    height={380}
                  />
                </div>
                <div className={styles.imageshowtostore}>
                  <Image
                    src={ImageStore11}
                    alt="image-store-11"
                    width={380}
                    height={380}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Store;
