import "./Card.css"
import clsx from 'clsx'
import { AiFillLinkedin } from "react-icons/ai";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useRef,useEffect} from "react"
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
export const Card = ({title,description,logo,className,textClassName,url,titleClassName,paraClassName,triggerElement,index=0}) => {
  const cardRef=useRef(null);
  useEffect(()=>{
    gsap.fromTo(cardRef.current,{opacity:0,translateY:"-10%"},{opacity:"100%",translateY:"0",duration:1.5,delay:index/2,scrollTrigger:{
      trigger:cardRef.current
    }},);
  },[triggerElement,index])
  return (
    <article className={clsx('card',className)} ref={cardRef}>
        <div className='card_img'>
          <img src={logo} alt="" />
        </div>
        <div className={clsx('card_details',textClassName)}>
          <h2 className={clsx('card_title',titleClassName)}>
            {title} 
            {
              url && <a href={url}><AiFillLinkedin size={25} weight="fill" style={{color:"#0a66c2"}}/></a>
            }
            </h2>
          <p className={clsx('card_para',paraClassName)}>{description}</p>
        </div>
    </article>
  )
}
