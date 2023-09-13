import styles from '../style'
import {logo} from '../assets'
import {footerLinks, socialMedia} from '../constants'

const Footer = () => {

  return (

    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt='bank' className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments easily, rapidly, securely & reliably.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLinks)=>(

            <div key={footerLinks.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerLinks.title}</h4>
              <ul>
                {footerLinks.links.map((Link, index)=>(
                  <li key={Link.name} className={`${index != footerLinks.length-1 ? "mt-3" : "mt-0"} font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary`}>{Link.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-[#3F3E45]'>
        <p className='font-poppins font-normal text-dimWhite text-center text-[16px] leading-[27px]'> CopyRight© 2023 HooBank. All Rights Reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((socials, index) => (
            <a href={socials.link} key={socials.id}><img key={socials.id} src={socials.icon} alt={socials.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!=socialMedia.length-1 ? 'mr-6' : 'mr-0'}`}/></a>
          ))}
        </div>
      </div>

    </section>

  )
}

export default Footer