import React from 'react';
import '../App.css';
import Image from '../imgs/testmonials.png';

function Testimonials() {
    return (
        <>
            <div className="container-fluid">
                <div className="container p-5">
                    <div className="card p-2 bg-heroScreen border-0">
                        <div className="card-body">
                            <h2 className="card-title mb-5"><i class="bi bi-quote bg-primary me-3 rounded-circle p-1 px-2 text-white"></i>Testimonials</h2>
                            <p className="card-text mb-5 text-secondary fs-5">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                            <div className="row">
                                <div className="col p-4 m-3 me-0 border border-secondary rounded-2 bg-primary">
                                    <div className="row">
                                        <div className="col-sm-1 mt-2">
                                            <i class="bi bi-play-circle-fill fs-2 text-white"></i>
                                        </div>
                                        <div className="col-md-8 mt-3">
                                            <hr className="border-5 border-white" />
                                        </div>
                                        <div className="col mt-3">
                                            <p className="text-secondary">00:00</p>
                                        </div>
                                        <div className="col">
                                            <div class="d-inline-flex position-relative">
                                                <span class="position-absolute bottom-0 start-0 ms-0 top-50">
                                                    <i class="bi bi-mic-fill text-white fs-4"></i>
                                                </span>
                                                <img src={Image} alt="" className="w-100 h-100 rounded-circle" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-5 col-sm-2">
                                            <img src={Image} alt="" className="w-100 h-100 rounded-circle" />
                                        </div>
                                        <div className="col-4 col-sm-6 mt-4">
                                            <h4 className="text-passion fw-semibold">Shubha Nagarajan</h4>
                                            <p className="text-info">Classical Dancer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonials;