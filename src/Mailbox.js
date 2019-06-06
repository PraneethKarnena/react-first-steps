import React from 'react';


const Mailbox = (props) => {
    return(
        <div className="container">
            <div className="row mb-3">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 text-center">
                    <h1>Mailbox</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 text-center">
                    <div className="form-group">
                    <input type="email" className="form-control" placeholder="To" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 text-center">
                    <div className="form-group">
                    <input type="email" className="form-control" placeholder="BCC" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 text-center">
                    <div className="form-group">
                    <input type="email" className="form-control" placeholder="CC" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 text-center">
                    <div className="form-group">
                    <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder="Body"></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 text-center">
                    <button className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    );
};

export default Mailbox;