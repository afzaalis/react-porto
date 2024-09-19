import React, {useState} from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen} from '@fortawesome/free-brands-svg-icons';
import './BannerCard.css';
import Popup from './Popup';

export const MyWork = () =>  {
  return (
    <section 
    id="1"
    className='my-work'>
        <h1 style={{fontFamily:'Poppins'}}>My Work</h1>
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
        <a href="https://cinema69.netlify.app/" target="_blank" rel="noopener noreferrer">
          <MDBCard className="h-100">
            <MDBCardImage
              className="hover-effect"
              src="/icon/movieFinder.png"
              alt='Cinema69 project screenshot'
              position='top'
            />
            <MDBCardBody >
              <MDBCardTitle>
                Cinema69
                <img src="/icon/1-removebg-preview.png" alt="Cinema69 Icon" style={{ width: '90px', marginLeft: '10px' }} />
              </MDBCardTitle>
              <MDBCardText>
                Building a movie finder website, API based on TMDB.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </a>
      </MDBCol>
      <MDBCol>
        <a href="https://github.com/afzaalis/StoreHub" target="_blank" rel="noopener noreferrer">
          <MDBCard className="h-100">
            <MDBCardImage
              className="hover-effect"
              src="/icon/StoreHub.png"
              alt='StoreHub project screenshot'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>
                StoreHub
                <img src="/icon/2-removebg-preview.png" alt="StoreHub Icon" style={{ width: '120px', marginLeft: '10px' }} />
              </MDBCardTitle>
              <MDBCardText>
                Building online store application with OOP team, using GUI, JDBC, and MVC method.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </a>
      </MDBCol>
      <MDBCol>
        <a href="https://github.com/afzaalis/APLIKASI_RPIC_KPL" target="_blank" rel="noopener noreferrer">
          <MDBCard className="h-100">
            <MDBCardImage
              className="hover-effect"
              src="/icon/KPLbeta.png"
              alt='RPIC beta 1.0 project screenshot'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>
                RPIC beta 1.0
                <img src="/icon/3-removebg-preview.png" alt="RPIC beta 1.0 Icon" style={{ width: '70px', marginLeft: '10px' }} />
              </MDBCardTitle>
              <MDBCardText>
                Building reservation application PC for internet cafe.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </a>
      </MDBCol>
      <MDBCol>
        <a href="https://github.com/afzaalis/web-quiztzm" target="_blank" rel="noopener noreferrer">
          <MDBCard className="h-100">
            <MDBCardImage
              className="hover-effect"
              src="/icon/quiztzm.png"
              alt='RPIC beta 1.0 project screenshot'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>
                Quiztzm
                <img src="/icon/quiztzmTools.png" alt="RPIC beta 1.0 Icon" style={{ width: '20%', marginLeft: '10px' }} />
              </MDBCardTitle>
              <MDBCardText>
              This interactive web app is built with React to deliver a dynamic quiz experience. Whether you're testing your knowledge or just having fun,
               our app is designed to keep you engaged with a countdown timer,
               smooth navigation, and real-time score updates. And when you ace all the questions, enjoy a spectacular fireworks animation as a reward!
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </a>
      </MDBCol>
    </MDBRow>
    </section>
  );
}

export const BannerCards = () => {
    const [popupContent, setPopupContent] = useState(null);

    const handlePopupOpen = (content) => {
        setPopupContent(content);
    };

    const handlePopupClose = () => {
        setPopupContent(null);
    };

    return (
        <section className="banner-cards">
            <h1 style={{ color: 'white', fontFamily: 'Poppins' }}>Experience</h1>
            <ul>
            <li style={{ '--accent-color': 'green' }}>
                    <div className="icon"><FontAwesomeIcon  icon={faCodepen} width='60px' /></div>
                    <div className="title">-</div>
                    <button 
                      className="glowing-button" 
                      onClick={() => handlePopupOpen({
                        title: "-",
                        text: "not available for now",
                        imageUrl:"-", 
                      })}
                    >
                      Show Details
                    </button>
                </li>
                <li style={{ '--accent-color': '#0B374D' }}>
                    <div className="icon"><img src='icon/telyuEsport.png' width='60px'/></div>
                    <div className="title">Telkom University Esports Social Media (Jan 2023 - Oct 2023)</div>
                    <button 
                      className="glowing-button" 
                      onClick={() => handlePopupOpen({
                        title: "Telkom University Esports Social Media",
                        text: `As a Social Media Staff in TELU ESPORT, my responsibilities include managing the organization's social media accounts and serving as a content writer.
                        In this role, I play a crucial part in enhancing TELU ESPORT's online presence and engaging with the gaming community. Here are some specific tasks I may undertake:

                        Social Media Account Management: Oversee and maintain TELU ESPORT's presence on various social media platforms, such as Instagram, LinkedIn, and OA Line. Ensure that profiles are up-to-date,
                        visually appealing, and aligned with the brand image.

                        Content Creation: Craft compelling and relevant content for social media posts. This could involve creating graphics, writing captions, and sharing updates about TELU ESPORT's activities, achievements, and upcoming events. Tailor the content to resonate with the gaming community.`,
                        imageUrl: "/img/telyuesport.png" 
                      })}
                    >
                      Show Details
                    </button>
                </li>
                <li style={{ '--accent-color': '#1286A8' }}>
                    <div className="icon"><img src='/icon/esd.png' width='60px' /></div>
                    <div className="title">Software Developer Member of Study Group ESD Laboratory (Jan 2024 - Now)</div>
                    <button 
                      className="glowing-button" 
                      onClick={() => handlePopupOpen({
                        title: "ESD Laboratory Member",
                        text: "As software developer study group member, im learning about: HTML5,CSS,JS,REACTM,REACT NATIVE,SLICING DESIGN,FETCH API,CRUD",
                        imageUrl: "/path/to/esd-lab-image.jpg" 
                      })}
                    >
                      Show Details
                    </button>
                </li>
                <li style={{ '--accent-color': '#0B374D' }}>
                    <div className="icon"><img src='icon/ariznachi.png' width='60px'/></div>
                    <div className="title">Content Creator at Kadin UMKM (Mar 2021 - May 2021)</div>
                    <button 
                      className="glowing-button" 
                      onClick={() => handlePopupOpen({
                        title: "Content Creator at Kadin UMKM",
                        text: 
                        `Assisting UMKM in publicizing the products they make by creating engaging content such as product poster ads and promotional videos.
                        1. **Product Poster Creation (Photoshop)**:
                        Creating product posters is one of the most effective ways to promote UMKM products. Using Adobe Photoshop, I offer attractive and professional poster design services. Each poster is crafted with appealing aesthetics and clear information to capture the target market's attention.
                        2. **Product Promotional Video Creation (Premiere Pro)**:
                        Product promotional videos help UMKM showcase their products dynamically and attractively across various social media platforms. Using Adobe Premiere Pro, I create high-quality, professional promotional videos. With a creative and technical approach, I develop videos that highlight product advantages and build connections with the audience.`,
                        imageUrl: "/img/grid.png", 
                    })}
                    >
                      Show Details
                    </button>
                </li>
                <li style={{ '--accent-color': 'green' }}>
                    <div className="icon"><FontAwesomeIcon  icon={faCodepen} width='60px' /></div>
                    <div className="title">-</div>
                    <button 
                      className="glowing-button" 
                      onClick={() => handlePopupOpen({
                        title: "-",
                        text: "not available for now",
                        imageUrl:"-", 
                      })}
                    >
                      Show Details
                    </button>
                </li>
            </ul>
            {popupContent && <Popup content={popupContent} onClose={handlePopupClose} />}
        </section>
    );
}

