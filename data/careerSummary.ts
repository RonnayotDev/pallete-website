interface CareerData {
  date: string
  title: string
  company: string
  tasks: string[]
}

const careerData: CareerData[] = [
  {
    date: "August 2021 - Present",
    title: "Fullstack Software Engineer",
    company: "Agoda Co., Ltd",
    tasks: [
      "Develop crawler application using .Net Core",
      "Operation Manager on SEO Team",
      "Implements feature both frontend and backend with experiment system using ReactJS, .Net, .Net Core, Scala, SQL",
      "Using Hadoop to support api's data",
      "Migrate application deployment from physical server to cloud using docker & kubernetes"
    ]
  },
  {
    date: "May 2020 - August 2021",
    title: "Fullstack Developer",
    company: "Magicbox Asia Solutions Co., Ltd.",
    tasks: [
      "Develop dashboard website, landing pages, etc... using ReactJS",
      "Develop meeting room reservation application using  react native",
      "Integrate translations to existing native application using Swift & Kotlin",
      "Modifies code to fix errors",
      "Develop payment service using Express with TypeOrm & Omise-node",
      "Develop in-app purchase library using Swift Package",
      "Working with agile development system",
    ]
  },
  {
    date: "Feb 2020 - Apr 2020",
    title: "Frontend Developer",
    company: "IC Web Co., Ltd. @Kasikorn site",
    tasks: [
      "Develop promotion pages using html",
      "Modifies code to fix errors",
    ]
  },
  {
    date: "Jun 2019 - Jan 2020",
    title: "Internship Frontend Developer",
    company: "Ezygroup Innovation Co., Ltd.",
    tasks: [
      "Develop landing pages, dashboard website using ReactJS",
    ]
  },
  {
    date: "2017-2018",
    title: "Parttime Teaching assistant",
    company: "Silpakorn university",
    tasks: [
      "helping students who need extra support to completetasks",
    ]
  }
]

export default careerData