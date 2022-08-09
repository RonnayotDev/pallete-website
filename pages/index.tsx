import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import careerData from '../data/careerSummary'
import skills from '../data/skills'
import contacts from '../data/contacts'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dachawatsathon</title>
        <meta name="description" content="Dachawatsathon resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.title}>
            Dachawatsathon Kunweeroj
          </h1>
          <h2 className={styles["sub-title"]}>
            Fullstack Software Developer
          </h2>
          <p>
            I'm a fullstack software engineer with robust problem-solving skills, fast learner, responsible, eager to learn new technologies.
          </p>
          {contacts.map(contact => (
            <>
            <div className={styles["contact-row"]}>
              <p>
                {contact.logo}
              </p>
              <p>
                {contact.detail}
              </p>
            </div>
            </>
          ))}
        </section>

        <section className={styles.section}>
          <div className={styles["career-container"]}>
            <h1 className={styles["career-title"]}>
              Career Summary
            </h1>
            
            {careerData.map((_careerData, index) => (
              <>
                <h2 className={styles["career-date"]}>
                  {_careerData.date}
                </h2>
                <h3 className={styles["career-date"]}>
                  {_careerData.title}
                </h3>
                <h4 className={styles["career-date"]}>
                  {_careerData.company}
                </h4>
                <ul>
                  {_careerData.tasks.map((task) => (
                    <li>
                      {task}
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h1 className={styles["skill-title"]}>
            Skills
          </h1>
          
          {skills.map((skill) => (
            <>
              <h2 className={styles["career-date"]}>
                {skill.category}
              </h2>
              <p className={styles["skill-detail"]}>
                {skill.detail}
              </p>
            </>
          ))}
        </section>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
