import React from 'react';
import '../App.css';
function Feature() {
    return (
        <>
            <div className="container-fluid p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card p-3 h-100 feature1">
                                <div className="card-body">
                                    <h2 className="card-title mb-4"><i className="bi bi-people-fill me-4"></i>People</h2>
                                    <p className="card-text mb-4 fs-5">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                                    <a href="/" className="btn btn-outline-primary">Connect</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card p-3 h-100 feature2">
                                <div className="card-body">
                                    <h2 className="card-title mb-4"><i className="bi bi-geo-alt-fill me-4"></i>Place</h2>
                                    <p className="card-text mb-4 fs-5">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                                    <a href="/" className="btn btn-outline-primary">Meet Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card p-3 h-100 feature3">
                                <div className="card-body">
                                    <h2 className="card-title mb-4"><i className="bi bi-basket3-fill me-4"></i>Product</h2>
                                    <p className="card-text mb-4 fs-5">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                                    <a href="/" className="btn btn-outline-primary">Get it</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card p-3 h-100 feature4">
                                <div className="card-body">
                                    <h2 className="card-title mb-4"><i className="bi bi-calendar-check-fill me-4"></i>Program</h2>
                                    <p className="card-text mb-4 fs-5">Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                                    <a href="/" className="btn btn-outline-primary">Attend</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feature;