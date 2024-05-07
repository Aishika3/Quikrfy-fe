import HeroBackground from "assets/hero_background.png"
import "./Hero.css"
import {Button} from "components"

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero_text'>
        <h1 className='hero_text_heading' style={{ fontFamily: 'Poppins Medium' }}>
        <span>Automaite:</span> Automate Your Business with Ease</h1>

            <p className='hero_text_para'>
                Tired of monotonous tasks? Automaite is here to help! our expert team helps you create Software to automate your repetitive work, so you can
                focus on what truly matters.
            </p>
            <a  className='hero_text_button_link' href="mailto:anishde85@gmail.com">
              <Button>Get In Touch</Button>
            </a>
        </div>
        <div className='hero-bg'>
           <img src={HeroBackground} alt="" />
        </div>
    </div>
  )
}
