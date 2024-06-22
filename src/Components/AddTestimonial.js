import React from 'react';
import '../App.css';
function AddTestimonial() {
    return (
        <>
            <div className="container-fluid bg-addTestimonials">
                <div className="container p-5">
                    <div className="card p-4">
                        <div className="card-body">
                            <h2 className="card-title mb-4"><i className="bi bi-plus-circle-fill me-4"></i>Add your own</h2>
                            <p className="card-text mb-4 fs-5">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                            <a href="/" className="btn btn-outline-primary">Add New</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddTestimonial