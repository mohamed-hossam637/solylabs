import Image from "next/image";
import Link from "next/link";
import image1 from '@/app/images/image (1).png'
import image2 from '@/app/images/image (2).png'
import image3 from '@/app/images/image (3).png'

import circle1 from '@/app/images/coins(2) 1.svg'
import circle2 from '@/app/images/coins(2) 2.svg'
import circle3 from '@/app/images/coins(2) 3.svg'
import circle4 from '@/app/images/coins(2) 4.svg'

import shield from '@/app/images/sheild.svg'

import eli from '@/app/images/Ellipse 4.svg';

export default function Home() {
  return <>
    <section className="banner py-4">
      <div className="container d-flex justify-content-center align-items-center h-100" >
        <div className="left w-50">
          <h1 className="text-center">
            SolyLabs operates in the Web3 space.
          </h1>
          <p className="text-center">
            It offers solutions in artificial intelligence, blockchain, distributed ledger technology, NFTs, cryptocurrencies and other blockchain-related technologies
          </p>
          <span className="first bounce">
            <Image src={circle3} />
          </span>
          <span className="sec bounce">
            <Image src={circle1} />
          </span>
          <span className="third bounce">
            <Image src={circle2} />
          </span>
          <span className="four bounce">
            <Image src={circle4} />
          </span>
        </div>

      </div>
    </section>

    <main className="py-5">
      <div className="container">
        <div className="section-head mb-5 fade-in">
          <h2 className="text-center text-capitalize">
            Let’s Know How SolyLabs Works
          </h2>
          <p className="text-center">
            SolyTicket is an innovative platform that offers event tickets in NFT format. It provides users with the opportunity to experience the future of digital tickets by providing secure, transparent and transferable ticketing services with blockchain technology.
          </p>
        </div>

        <section className="d-flex mt-5 section fade-left ">
          <div className="image w-50 p-2">
            <Image src={image1} className="w-100 h-100 rounded" />
          </div>
          <div className="text w-50 p-2 d-flex flex-column justify-content-center">
            <h3 className="fw-bold blue text-capitalize">
              Monitor the results
            </h3>
            <p className="larg-text">
              You can monitor your sales, incomes and events in real-time
            </p>
            <a className="learn-more">
              learn more
            </a>
          </div>
        </section>

        <section className="d-flex mt-5 section fade-right">
          <div className="text w-50 p-2 d-flex flex-column justify-content-center">
            <h3 className="fw-bold blue text-capitalize">
              Create your own event
            </h3>
            <p className="larg-text">
              You can create your event and its nfts effortlessly. And you can manage your ticket categories dynamically
            </p>
            <a className="learn-more">
              learn more
            </a>
          </div>
          <div className="image w-50 p-2">
            <Image src={image2} className="w-100 h-100 rounded" />
          </div>
        </section>

        <section className="d-flex mt-5 section fade-left">
          <div className="image w-50 p-2">
            <Image src={image3} className="w-100 h-100 rounded" />
          </div>
          <div className="text w-50 p-2 d-flex flex-column justify-content-center">
            <h3 className="fw-bold blue text-capitalize">
              creating ads by yourself
            </h3>
            <p className="larg-text">
              you can give ad to your events from inside the solyticket or instagram, twitter, facebook.
            </p>
            <a className="learn-more">
              learn more
            </a>
          </div>
        </section>

      </div>
    </main>

    <section className="extra-setion fade-in">
      <Image src={eli} />
      <Image src={eli} />
      {/* <Image src={eli} /> */}
      <div className="container">
        <div className="image">
          <Image src={shield} className="w-100 h-100" />
        </div>
        <div className="text">
          <h3>
            this is title text
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
            Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
            Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
          </p>
          <a className="learn-more">
            Get Started
          </a>
        </div>
      </div>
    </section>

    <section className="py-4 boxs">
      <div className="container">
        <h2>
          minimize friction and increase productivity
        </h2>
        <div>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
            Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
          </h5>
          <div className="row gap-3">
            <div className="col-lg-3">
              <div className="icon text-center py-3">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h5 className="fw-bold">
                title
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="col-lg-3">
              <div className="icon text-center py-3">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h5 className="fw-bold">
                title
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="col-lg-3">
              <div className="icon text-center py-3">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h5 className="fw-bold">
                title
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="faq py-3">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column w-100">
          <h5 className="faq-tag mb-3">
            FAQs
          </h5>
          <h2>
            Frequently Asked Questions
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
          </p>
        </div>
        <div className="row w-100 py-3">
          <details className="col-lg-4">
            <summary>
              this is question
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
            </p>
          </details>
          <details className="col-lg-4">
            <summary>
              this is question
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
            </p>
          </details>
          <details className="col-lg-4">
            <summary>
              this is question
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
            </p>
          </details>
          <details className="col-lg-4">
            <summary>
              this is question
            </summary>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
              Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data
            </p>
          </details>
        </div>
      </div>
    </section>

    <footer>

    </footer>

  </>;
}
