import "../styles/ExtendedServices.css";
//import "./components/ExtendedServices.jsx";
import {Card} from "components";
import Art  from "../assets/art vestige.jpg";
import heal  from "../assets/simpheal.jpg";
import tutor from "../assets/wagon tutors.jpg";

export const ExtendedServices = () => {
    const EXTENDEDSERVICES=[
      {logo:Art, title:"Art Vestige",description: (
        <>
          Captivating Art Marketing & Content Writing Services -<b>Please&nbsp;
          <a href="your-link-here">Click</a></b>
        </>
      ),},
      {logo:heal, title:"Simp Heal",description:(
        <>
          Tailored Solutions for Health Issue Cure -<b>Please&nbsp;
          <a href="your-link-here">Click</a></b>
        </>
      ),},
      {logo:tutor,title:"Wagon Tutors",description:(
        <>
          Expert Study Tutors for Academic Excellence -<b>Please&nbsp;
          <a href="your-link-here">Click</a></b>
        </>
      ),},
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
