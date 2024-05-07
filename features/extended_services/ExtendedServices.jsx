import "../styles/ExtendedServices.css";
//import "./components/ExtendedServices.jsx";
import {Card} from "components";
import Art  from "../assets/art vestige.jpg";
import heal  from "../assets/simpheal.jpg";
import tutor from "../assets/wagon tutors.jpg";

export const ExtendedServices = () => {
    const EXTENDEDSERVICES=[
      {logo:Art, title:"Al Marketing and Content writing Service",description:"We provide automated compelling content and strategic marketing converge to captivate audiences and drive impactful results(build by ChatGPT API)."},
      {logo:heal, title:"WhatsApp and Email Marketing Service",description:"We create tailor-made WhatsApp automated systems and email-marketing templates to help scale up your business and maintain you customers through WhatsApp hassle-free."},
      {logo:tutor,title:"Web and App Development Service",description:"We create tailor-made, user-friendly mobile apps to help you engage with customers and streamline business processes and our team builds visually stunning and responsive websites to enhance your online presence and drive growth."},
    ];
    return (
      <section className='services' id='services'>
        <h1 className='services_title'>Our Customers</h1>
        <div className='services_row'>
            {
              EXTENDEDSERVICES.map(service=><Card key={service.title} {...service} className='services_card'/>)
            }
        </div> 
      </section>
    )
  }
