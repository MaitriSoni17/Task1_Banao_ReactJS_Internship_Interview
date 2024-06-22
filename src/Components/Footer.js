import React from 'react';
import '../App.css';
function Footer() {
    return (
        <>
            <footer className="container-fluid bg-white p-5 pb-3">
                <div className="row">
                    <div className="col">
                        <p className="fw-bold">Hobbycue</p>
                        <p>About Us</p>
                        <p>Our Services</p>
                        <p>Work with Us</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="col">
                        <p className="fw-bold">How Do I</p>
                        <p>Sign Up</p>
                        <p>Add a Listing</p>
                        <p>Claim Listing</p>
                        <p>Post a Query</p>
                        <p>Add a Blog Post</p>
                        <p>Other Queries</p>
                    </div>
                    <div className="col">
                        <p className="fw-bold">Quick Links</p>
                        <p>Listings</p>
                        <p>Blog Posts</p>
                        <p>Shop / Store</p>
                        <p>Community</p>
                    </div>
                    <div className="col-md-5">
                        <p className="fw-bold">Social Media</p>
                        <i class="bi bi-facebook fs-4 me-4 text-secondary rounded-circle bg-secondary-subtle p-2 py-1"></i>
                        <i class="bi bi-twitter fs-4 me-4 text-secondary rounded-circle bg-secondary-subtle p-2 py-1"></i>
                        <i class="bi bi-instagram fs-4 me-4 text-secondary rounded-circle bg-secondary-subtle p-2 py-1"></i>
                        <i class="bi bi-pinterest fs-4 me-4 text-secondary rounded-circle bg-secondary-subtle p-2 py-1"></i>
                        <span className="rounded-circle text-secondary rounded-circle bg-secondary-subtle p-1 me-4">
                            <i class="bi bi-google fs-6 "></i><i class="bi bi-plus fw-bold"></i></span>
                        <i class="bi bi-youtube fs-4 me-4 text-secondary rounded-circle bg-secondary-subtle p-2 py-1"></i>
                        <i class="bi bi-telegram fs-4 me-4 text-secondary rounded-circle bg-secondary-subtle p-2 py-1"></i>
                        <i class="bi bi-envelope-fill fs-4 me-4 text-secondary rounded-circle bg-secondary-subtle p-2 py-1"></i>

                        <p className="fw-bold mt-5">Invite Friends</p>
                        <div class="input-group mb-3 w-75">
                            <input type="text" class="form-control fs-5 rounded-3 rounded-end-0 p-2 border-primary" placeholder="Email ID" aria-label="Recipient's username" aria-describedby="email" />
                            <button class="input-group-text btn btn-primary fs-5 rounded-3 rounded-start-0 px-3" id="email">Invite</button>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container-fluid text-center bg-heroScreen p-2 pt-3 text-dark">
                <p className="fs-5">&copy; Purple Cues Private Limited</p>
            </div>
        </>
    );
}

export default Footer;