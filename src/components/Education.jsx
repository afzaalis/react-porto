import React from "react";
import './Card.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const Education = () => {
    return (
        <section id="education" style={{ marginTop: '10px' }}>
            <h2 style={{ color: '#FFFF', fontWeight: 'normal', fontSize: '40px', fontFamily:'Poppins' }}>Education</h2>
            <div id="carouselExampleCaptions" className="carousel slide" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/telkom.png" className="d-block w-100" alt="Telkom University" style={{ height: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-block" >
                            <h5 style={{ color: 'white' }}>Telkom University</h5>
                            <p>Bachelor's Degree, Computer Software Engineering 2022</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/img/smkn3.png" className="d-block w-100" alt="SMKN 3 Bandung" style={{ height: '400px', objectFit: 'cover' }} />
                        <div className="carousel-caption d-block">
                            <h5 style={{ color: 'white' }}>SMKN 3 Bandung</h5>
                            <p>Multimedia and Information Technology 2019-2022</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};
