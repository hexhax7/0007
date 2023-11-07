import Image from "next/image";
import Contact from "./contact/page";
import { Abel } from "next/font/google";

const abel = Abel({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="main">
      <div className="logo">
        <div>
          <h1>H</h1>
        </div>
        <h2 className={abel.className} style={{ fontSize: "32px" }}>
          hexhax
        </h2>
        <h2 className={abel.className}>Drones</h2>
      </div>
      <Image
        className="landscape"
        priority={true}
        src="/DJI_0465.png"
        style={{ objectFit: "cover", height: "100vh", width: "100%" }}
        alt="DJI mini 2 photo"
        width={4000}
        height={2250}
      />
      <Image
        src="/portrait/DJI_04669x16.png"
        priority={true}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "auto",
          maxHeight: "100vh",
        }}
        className="portrait"
        alt="DJI mini 2 photo"
        width={1266}
        height={2250}
      />
      <div className="specs-flex">
        <Image
          className="specs-flex-image"
          style={{ objectFit: "contain" }}
          src="/djimini2.jpg"
          alt="DJI mini 2 photo"
          width={2000}
          height={1125}
        />
        <div className="specs-text">
          <p>
            Elevate Your Construction and Commercial Visuals Discover the
            potential of our drone services, tailored to enhance your
            construction and commercial imagery. With extended flight
            capabilities, reliable wind resistance, long-range video
            transmission, and the ability to capture 12MP photos and 4K/120fps
            video, our drones offers a valuable tool for your visual projects.
            Contact us today to explore how we can assist you in capturing
            captivating content.
          </p>

          <div className="specs">
            <h2>12MP photos</h2>
            <div></div>
            <h2>4K/120fps</h2>
          </div>
        </div>
      </div>

      <div className="chamonix">
        <h1 className={abel.className}>Chamonix 19/09/2023</h1>
        <div className="chamonix-flex">
          <div>
            <Image
              src="/DJI_0578.png"
              className="chamonix-img"
              alt="DJI mini 2 photo"
              width={4000}
              loading="lazy"
              height={2250}
              style={{ objectFit: "contain" }}
            />
          </div>

          <video
            autoPlay
            loop
            muted
            alt="DJI mini 2 photo"
            width="4000"
            loading="lazy"
            height="386"
            style={{ objectFit: "contain" }}
          >
            <source src="/Video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="services">
        <div>
          <Image
            src="/Drone_inspection.png"
            width={512}
            loading="lazy"
            height={512}
            style={{ objectFit: "contain" }}
            alt="drone inspection"
          />
          <p className="">
            Explore drone inspections for construction sites - they excel at
            accessing challenging areas, ensuring thorough, safe assessments.
            Rely on precision and ease, eliminating risky manual inspections for
            confident decision-making.
          </p>
        </div>

        <div>
          <Image
            src="/Drone_imagery.png"
            width={512}
            loading="lazy"
            height={512}
            style={{ objectFit: "contain" }}
            alt="drone imagery"
          />
          <p className="">
            Elevate your website with our drone photography service. We capture
            high-quality, unique aerial shots that offer a fresh perspective on
            your work. Transform your online presence with striking visuals.
          </p>
        </div>
      </div>
      <div className="process">
        <div className={abel.className}>
          <h2>Step 1</h2>
          <span className="material-symbols-outlined">call</span>
          <p>Get in touch to discuss your requirements.</p>
          <h4>+447547845006 </h4>
          <h4>hexhax-drones@outlook.com</h4>
        </div>
        <div className={abel.className}>
          <h2>Step 2</h2>
          <span className="material-symbols-outlined">photo_camera</span>
          <p>We will come to out take photos free of charge.</p>
        </div>
        <div className={abel.className}>
          <h2>Step 3</h2>
          <span className="material-symbols-outlined">mail</span>
          <p>
            We will email all of the photos we have taken allowing you to pick
            which photo you would like to purchase.
          </p>
        </div>

        <div className="price">
          <h1 className={abel.className}>Prices</h1>
          <div className={abel.className}>
            <table>
              <tr>
                <td style={{ whiteSpace: "nowrap" }}>
                  Contact for a personalized quote
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="gallery">
        <Image
          className="m-5"
          src="/DJI_0539.png"
          style={{ objectFit: "contain", width: "90vw", height: "100%" }}
          alt="DJI mini 2 photo"
          width={4000}
          loading="lazy"
          height={2000}
        />

        <Image
          className="m-5"
          src="/DJI_0524.png"
          style={{ objectFit: "contain", width: "90vw", height: "100%" }}
          alt="DJI mini 2 photo"
          width={4000}
          loading="lazy"
          height={2000}
        />
      </div>

      <Contact />
    </main>
  );
}
