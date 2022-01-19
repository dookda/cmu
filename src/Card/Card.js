import React from "react";
import './../assets/css/soft-ui-dashboard.min.css'
import './../Style.css'

const Card = (props) => {
    return (
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-5 f">
            <div className="card">
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Money {props.name}</p>
                                <h5 className="font-weight-bolder mb-0">
                                    $53,000
                                    <span className="text-success text-sm font-weight-bolder">+55%</span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-4 text-end">
                            <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
