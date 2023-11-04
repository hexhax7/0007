import Image from 'next/image'
import Contact from './contact/page';
import { Abel } from 'next/font/google';

const abel = Abel({ subsets: ['latin'], weight: "400"})

export default function Home() {
  return (
    <main className="main">
      <div className='logo'>
        <div><h1>H</h1></div>
        <h2 className={abel.className} style={{fontSize: "32px"}}>hexhax</h2><h2 className={abel.className}>Drones</h2>
        
      </div>
              <Image

          src="/DJI_0465.jpg"
          style={{ objectFit: "contain", width: "100vw",  height: "100%" }}
          
          width={4000}
          loading="lazy" height={2250}
          
          
        />


      <div className="specs">
        <h2 >12MP photos</h2>
        <div ></div>
        <h2 >4K/120fps</h2>
      </div>

      <div className='chamonix'>
        <h1 className={abel.className}>Chamonix 19/09/2023</h1>
        <div className='chamonix-flex'>
          <div><Image src="/DJI_0578.jpg" className="chamonix-img" width={4000} loading="lazy" height={2250} style={{objectFit:"contain"}}
          /></div>
        
           <video autoPlay loop muted width="4000" loading="lazy" height="386" style={{objectFit:"contain"}}>
            <source src="/Video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="services">
        <div>
        <Image src="/Drone_inspection.png" width={512} loading="lazy" height={512} style={{objectFit:"contain"}} alt='drone inspection' />
          <p className="">
            Explore drone inspections for construction sites - they excel at accessing challenging areas, ensuring thorough, safe assessments. Rely on precision and ease, eliminating risky manual inspections for confident decision-making.
          </p>
        </div>
      
        <div>
          <Image src="/Drone_imagery.png" width={512} loading="lazy" height={512} style={{objectFit:"contain"}} alt='drone imagery'/>
          <p className="">
            Elevate your website with our drone photography service. We capture high-quality, unique aerial shots that offer a fresh perspective on your work. Transform your online presence with striking visuals.
          </p>
        </div>
        </div>
        <div className="gallery">
              <Image className="m-5" src="/DJI_0539.jpg" style={{ objectFit: "contain", width: "90vw",  height: "100%" }}  width={4000} loading="lazy" height={2000}
                   />
              <Image className="m-5" src="/DJI_0524.jpg" style={{ objectFit: "contain", width: "90vw",  height: "100%" }}  width={4000} loading="lazy" height={2000}
                   />
      </div>
      <Contact />

    </main>
  );
}
