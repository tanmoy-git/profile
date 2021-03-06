const positions = [
  {
    company: "PropertyGuru",
    position: "Technical Team Lead, Asia",
    link: "https://www.propertyguru.com.sg/",
    daterange: "February 2019 - Present",
    points: [
      {
        product:
          "Listing Feedback to improve the quality of the listings for our consumers",
        techstack: "NodeJs, TypeScript, MongoDb, Docker, kubernetes, JavaScript",
        producturl: "https://www.propertyguru.com.sg/listing/23056615/for-sale-high-park-residences#listing-feedback-desktop",
        productName: "Listing Feedback"
      },
      {
        product:
          "New listing performance data insights for agents, to increase visibility into their business",
        techstack: "BigQuery, Airflow, Kubernetes, Docker, Redis, MongoDB, NodeJS, React",
        producturl: "http://help.propertyguru.com.my/en/articles/2596023-listing-performance-insights",
        productName: "Listing Performance Insight for Agents"
      },
      {
        product:
          "New Search filter for consumer website to provide consumers with better results",
        techstack: "Javascript, PHP, MySql",
        producturl: "https://www.propertyguru.com.sg/property-for-rent?market=residential",
        productName: "New Search Experience"
      },
      {
        product:
          "Integration of whatsapp desktop for consumers for submitting leads easily",
        techstack: "Javascript, PHP, MySql",
        producturl: "https://www.propertyguru.com.sg/listing/23553599/for-rent-yong-an-park",
        productName: "Whatsapp Desktop for Lead Submission"
      },
      {
        product:
          "Google One Tap sign in for seamless user sign in/ sign up flow",
        techstack: "Javascript, PHP, MySql",
        producturl: "",
        productName: ""
      },
      {
        product:
          "Bahasa Melayu support for PropertyGuru Malaysia website",
        techstack: "Javascript, PHP, MySql",
        producturl: "https://www.propertyguru.com.my/bm",
        productName: "Bahasa Melayu support for Propertyguru Malaysia"
      },
      {
        product:
          "Central service for communication (email, SMS) with multiple gateway support over REST, increased reusability and reduced effort of integration of communication channels in different microservices ",
        techstack: "NodeJs, TypeScript, MongoDb, Braze, AWS SES, Nexmo",
        producturl: "",
        productName: ""
      },
      {
        product:
          "Single Microservice to control and manage users’ preferences across all countries and locales",
        techstack: "NodeJs, TypeScript, MongoDb, Braze",
        producturl: "",
        productName: ""
      },
      {
        product:
          "Registration service for offline event attendees, with management, tracking and campaigning support ",
        techstack: "NodeJs, TypeScript, MongoDb, Braze",
        producturl: "",
        productName: ""
      },
      {
        product:
          "Design and implemetation of customer, listing and agent profiling for logged in and non logged in users based on Google Cloud, Segment and Braze BigData Solutions",
        techstack: "BigQuery, BigTable, CloudFunctions, PubSub, Kubernetes, Docker, Redis, MongoDB, NodeJS",
        producturl: "",
        productName: ""
      },
      {
        product:
          "Realtime Event Streaming service for Client and server side tracking of user activities for targetted campaigning",
        techstack: "GO, Cloud Storage, PubSub, BigTable",
        producturl: "",
        productName: ""
      },
      {
        product:
          "Design and implementation of end to end solutions (backend & frontend) for Home loan pre approval project in Malaysian market",
        techstack: "PHP, MySql, JavaScript, HTML, CSS, WordPress",
        producturl: "https://propertyguru.com.my/own-your-home",
        productName: "Own your home"
      },
      {
        product:
          "Integration of Google Analytics, Facebook Pixel, DataXU and yahoo pixel with propertyguru website",
        techstack: "JavaScript, PHP",
        producturl: "",
        productName: ""
      }
    ]
  },
  {
    company: "Philips Healthcare",
    position: "Team Lead (Full Stack)",
    link: "https://www.usa.philips.com/healthcare",
    daterange: "April 2016 - January 2019",
    points: [
      {
        product:
          "Design and implementation of APIs to get, create, update patient, care-provider and physician details",
        techstack: "SalesForce, APEX, HTML",
        producturl:
          "https://www.philips.co.in/healthcare/philipshealthcareathome/",
        productName: "Healthcare at home"
      },
      {
        product:
          "Extend translation support in German for launch of WellCentive in Rostock, Germany",
        techstack: "Java, AngularJS, JavaScript",
        producturl: "https://www.wellcentive.com/",
        productName: "Wellcentive"
      },
      {
        product:
          "Create data aggregation platform based on Population Health to help analyze hospitals about their value based care.",
        techstack:
          "Java, Angular 5, TypeScript, AWS- Redshit, Glue, S3, RDS, Lambda",
        producturl: "",
        productName: ""
      }
    ]
  },
  {
    company: "Homelane",
    position: "Senior Software Engineer (Backend)",
    link: "https://www.homelane.com/",
    daterange: "March 2015 - March 2016",
    points: [
      {
        product:
          "Token Based Auth Service With Google & Facebook OAuth2 Support",
        techstack: "Java, Redis, REST",
        producturl: "",
        productName: ""
      },
      {
        product:
          "APIs For Search, List & Product Details with Sort, Range and Size Filters",
        techstack: "PHP, APC Cache, REST",
        producturl: "",
        productName: ""
      },
      {
        product: "Project Service aggregation APIs",
        techstack: "Java, Mongo, Kafka, RabbitMQ, REST",
        producturl: "",
        productName: ""
      },
      {
        product:
          "APIs To Generate Pre-Signed Urls for Upload/Download Artifacts To/From AWS S3",
        techstack: "AWS, Java, REST",
        producturl: "",
        productName: ""
      },
      {
        product: "Pricing Engine",
        techstack: "PHP, MySql, Nginx",
        producturl: "",
        productName: ""
      }
    ]
  },
  {
    company: "Ebay",
    position: "Software Engineer",
    link: "https://www.ebay.com/",
    daterange: "June 2013 – February 2015",
    points: [
      {
        product: "Application level routing management using ESB",
        techstack: "Java",
        producturl: "",
        productName: ""
      },
      {
        product:
          "Archiving of platform level functionalities as dependency libraries",
        techstack: "Java, Spring",
        producturl: "",
        productName: ""
      },
      {
        product: "Batch as a service to reduce idle computation cycle ",
        techstack: "Java, Spring Batch, Docker",
        producturl: "",
        productName: ""
      },
      {
        product: "Batch service to load data to MySql from raw data",
        techstack: "Java, SQL Loader",
        producturl: "",
        productName: ""
      }
    ]
  },
  {
    company: "Open Source Contribution",
    position: "Contributor",
    link: "",
    daterange: "continuos process",
    points: [
      {
        product:
          "Bugfix: OAuth2-Facebook in open source SocialAuth plugin",
        techstack: "Java",
        producturl: "https://goo.gl/vmORf4",
        productName: "OAuth2 Bugfix"
      },
      {
        product: "Correction: Virtualenvwrapper project, pre-requirement for OpenCV installation",
        techstack: "Python, documentation",
        producturl: "https://goo.gl/focJgw",
        productName: "Correction for OpenCV"
      },
    ]
  },
  {
    company: "Novell",
    position: "Internship (6 months)",
    link: "https://novell.com",
    daterange: "January 2013 – May 2013",
    points: [
      {
        product: "Linux kernel memory debugger",
        techstack: "C, SUSE Linux Kernel",
        producturl: "",
        productName: ""
      }
    ]
  },
  {
    company: "VSocialize",
    position: "Summer Intern (2 months)",
    link: "https://www.vsocialize.com/",
    daterange: "May 2012 – July 2012",
    points: [
      {
        product:
          "Customizable platform for social media marketing and management",
        techstack: "Ruby On Rails, Heroku",
        producturl: "",
        productName: ""
      }
    ]
  }
];

export default positions;
