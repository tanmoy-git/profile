// TODO Add a couple lines about each project
const data = [
  {
    title: "Listing Feedback",
    subtitle: "Propertyguru",
    link: "https://www.propertyguru.com.sg/listing/23056615/for-sale-high-park-residences#listing-feedback-desktop",
    image: "/images/projects/projectsimages/listing_feedback.png",
    date:
      "Image is only for illustration purpose, actual design and implementation may differ",
    desc:
      "Simple way for users to submit feedback regarding a listing. " +
      "All the details given here are pubicly available and it does not violate any non disclosure agreement with the employer"
  },
  {
    title: "Listing Performance Insights",
    subtitle: "Propertyguru",
    link: "http://help.propertyguru.com.my/en/articles/2596023-listing-performance-insights",
    image: "/images/projects/projectsimages/lpi.png",
    date:
      "Image is only for illustration purpose, actual design and implementation may differ",
    desc:
      "Listing Performance Insight for Agents. " +
      "All the details given here are pubicly available and it does not violate any non disclosure agreement with the employer"
  },
  {
    title: "New Listing Search Filters for Improved Search Experience",
    subtitle: "Propertyguru",
    link: "https://www.propertyguru.com.sg/listing/23056615/for-sale-high-park-residences#listing-feedback-desktop",
    image: "/images/projects/projectsimages/sfr.png",
    date:
      "Image is only for illustration purpose, actual design and implementation may differ",
    desc:
      "New filters for making search experience of a consumer better and to provide them with more relavant results. " +
      "All the details given here are pubicly available and it does not violate any non disclosure agreement with the employer"
  },
  {
    title: "Google One Tap Sign in",
    subtitle: "Propertyguru",
    link: "https://www.propertyguru.com.sg/",
    image: "/images/projects/projectsimages/got.png",
    date:
      "Image is only for illustration purpose, actual design and implementation may differ",
    desc:
      "Simple and seamless way for users to sign in or sign up. " +
      "All the details given here are pubicly available and it does not violate any non disclosure agreement with the employer"
  },
  {
    title: "Whatsapp Desktop for Lead submission",
    subtitle: "Propertyguru",
    link: "https://www.propertyguru.com.sg/",
    image: "/images/projects/projectsimages/whatsapp_desktop.png",
    date:
      "Image is only for illustration purpose, actual design and implementation may differ",
    desc:
      "Integration of whatsapp desktop for consumers for submitting leads easily. " +
      "All the details given here are pubicly available and it does not violate any non disclosure agreement with the employer"
  },
  {
    title: "User profiling",
    subtitle: "Propertyguru",
    link: "",
    image: "/images/projects/projectsimages/bigdata.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "Locked due to company non-disclosure agreement. User profiling based on Big Data. " +
      "Details may not be available upon request"
  },
  {
    title: "Communication Preference Service",
    subtitle: "Propertyguru",
    link: "",
    image: "/images/projects/projectsimages/bigdata.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "Locked due to company non-disclosure agreement. Single Microservice to control and manage users’ preferences across all countries and locales. " +
      "Details may not be available upon request"
  },
  {
    title: "Messenger Service",
    subtitle: "Propertyguru",
    link: "",
    image: "/images/projects/projectsimages/bigdata.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "Locked due to company non-disclosure agreement. Central service for communication (email, SMS) with multiple gateway support over REST, increased reusability and reduced effort of integration of communication channels in different microservices. " +
      "Details may not be available upon request"
  },
  {
    title: "Offline Event Attendee Service",
    subtitle: "Propertyguru",
    link: "",
    image: "/images/projects/projectsimages/bigdata.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "Locked due to company non-disclosure agreement. Registration service for offline event attendees. " +
      "Details may not be available upon request"
  },
  {
    title: "Home Loan Pre Approval",
    subtitle: "Propertyguru",
    link: "",
    image: "/images/projects/projectsimages/hlpa.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "Locked due to company non-disclosure agreement. Home Loan pre approval for Malaysian market. " +
      "Details may not be available upon request"
  },
  {
    title: "Databox",
    subtitle: "Philips",
    link: "",
    image: "/images/projects/projectsimages/databox.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "A UI based data aggregation tool to show insights to Hospitals on their performance by crunching terabytes of data" +
      "Details are available upon request"
  },
  {
    title: "Wellcentive",
    subtitle: "Philips",
    link: "",
    image: "/images/projects/projectsimages/wellcentive.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "An incentive based application for hospitals and insurance providers to capture and deliver performace to improve value based care. " +
      "Details are available upon request"
  },
  {
    title: "Hospital to home",
    subtitle: "Philips",
    link: "",
    image: "/images/projects/projectsimages/h2h.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "An end to end solution for physicians, patients and caregivers to bring the need of a hospital to the luxury of home" +
      "Details are available upon request"
  },
  {
    title: "Pricing Engine",
    subtitle: "HomeLane",
    link: "",
    image: "/images/projects/projectsimages/pricingengn.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "A generic pricing rule engine developed in Cake PHP to support different types of products' price calculation. " +
      "Details are available upon request"
  },
  {
    title: "OAuth2 based Authentication & Authorization server",
    subtitle: "HomeLane",
    link: "",
    image: "/images/projects/projectsimages/Oauth2.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "Java based implementation of authorization and authentication server with faster performance. " +
      "Details are available upon request"
  },
  {
    title: "Batch as a service",
    subtitle: "Ebay",
    link: "",
    image: "/images/projects/projectsimages/Baas.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "On demand docker based containers to spin up and run high read-write intensive batch" +
      " jobs to perform certain business tasks based on Spring boot. " +
      "Details are available upon request"
  },
  {
    title: "Stock market predictor based on Machine learning and ANN",
    subtitle: "Undergraduate Project",
    link: "",
    image: "/images/projects/projectsimages/ann.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "A stock market predictor application developed in C# which uses multilayer perceptron with back propagation " +
      "to learn to predict stock market price. Trained with tha data from YQL DB. " +
      "Details are available upon request"
  },
  {
    title: "Control of a mobile embedded robot, using GPRS",
    subtitle: "Undergraduate Project",
    link: "",
    image: "/images/projects/projectsimages/robot.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "A robot cotrolled with a GPRS module mounted on a arduino," +
      "with AI enabled obstacle detection and avoidance, which could be " +
      "remotely controlled via Google maps API or via keayboard. " +
      "Details are available upon request"
  },
  {
    title: "Laser based human machine interface for remote computer operaions",
    subtitle: "Undergraduate Project",
    link: "",
    image: "/images/projects/projectsimages/laser.png",
    date:
      "Image is only for illustration purpose, actual design and implementation differs",
    desc:
      "Laser pointer to move mouse cursor, " +
      "go to next/previous slide, single click/ double click/ left click " +
      "Details are available upon request"
  }
];

export default data;
