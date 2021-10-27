import React from "react";
import './style.css';
import Logotype from '../img/Logotype.png';
import Group from '../img/Group.png';


export function SideNav() {
    return (
        <div className="container">
            <div className="col-12 text-end">
                <button type="button" onclick="postTransactionMessage('close')"
                    className="btn btn-link p-0 text-decoration-none" style={{ fontSize: "40px" }}>&times;</button>
            </div>

            <div className="card py-0" style={{ margin: "1.75rem auto", maxWidth: "1000px" }}>
                <div className="card-body">
                    <div className="row">
                        <div class="col-lg-4 d-none d-lg-block bg-light">

                            <div class="container">
                                <img src={Logotype} alt=" goflex-logo" class="mb-0" style={{ marginTop: "2.5rem" }} />
                                <h5 class="mt-4 fs-6">Travel Details</h5>
                                <hr />
                                <p class="flight text-start">Flight Details</p>
                                <p class="flight1 text-start">Flight Type-One Way</p>
                                <p class="flight1 text-start">Flight 1</p>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-3 pt-2"><i
                                                class="fas fa-2x fa-plane-departure text-black"></i>
                                            </div>
                                            <div class="col-9">
                                                <div class="fw-sm mb-1">Departure</div>
                                                <div class="fw-12">Muritala Muhammed Airport</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-3 pt-2"><i
                                                class="fas fa-2x fa-plane-arrival text-black"></i>
                                            </div>
                                            <div class="col-9">
                                                <div class="fw-sm mb-1">Arrival</div>
                                                <div class="fw-12 text-start">John. F Kennedy Airport</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container mt-4">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="row">
                                            <div class="col-3"></div>
                                            <div class="col-9">
                                                <h3 class="human">Adult</h3>
                                                <p class="human-number mt-2">1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row">
                                            <div class="col-3"></div>
                                            <div class="col 9">
                                                <h3 class="human">Children</h3>
                                                <p class="human-number mt-2">0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container mt-2">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="human">Price</h3>
                                        <p class="actual-price fs-6">&#8358; 350,500</p>
                                    </div>
                                </div>
                            </div>
                            <div class="container">
                                <div class="col-md-12 pb-4 text fw-bold">
                                    <p class="hotel">Hotel Details</p>
                                    <h3 class="hotel-num">N/A</h3>
                                </div>


                            </div>
                            <div class="container mb-4">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h3 class="human">Price</h3>
                                        <p class="actual-price fs-6">&#8358; 350,500</p>
                                    </div>
                                </div>
                            </div>



                            <hr />

                            <div class="container">
                                <div class="row row-cols-2">
                                    <div class="col fw-sm fs-14">Ticket Fare</div>
                                    <div class="col text-end fs-14 fw-sm">&#8358; 701,000</div>
                                    <div class="col fw-sm fs-14 mt-3">Hotel Fare</div>
                                    <div class="col text-end fs-14 fw-sm mt-3">&#8358; 202,000</div>
                                    <div class="col fw-sm fs-14 mt-3">VAT</div>
                                    <div class="col text-end fw-sm fs-14 mt-3">&#8358; 22,000</div>
                                </div>
                            </div>
                            <hr />
                            <div class="container">
                                <div class="row">
                                    <div class="total col-6">Total</div>
                                    <div class="total col-6 text-end">&#8358; 925,000</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8 col-md-12 p-4">
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane mt-3 ms-2 fade show active" id="pills-customer-info"
                                    role="tabpanel" aria-labelledby="pills-customer-info-tab">

                                    <div class="container">
                                        <h4>Customer Information</h4>
                                        <div class="row mt-3">
                                            <div class="tag-form">
                                                <form action="#">
                                                    <div class="row">
                                                        <div class="col-md-6 mt-2">
                                                            <label for="inputfirstName" class="form-label ">FIRST
                                                                NAME</label>
                                                            <input type="text" class="form-control px-3" />
                                                        </div>
                                                        <div class="col-md-6 mt-2">
                                                            <label for="inputfirstName" class="form-label">LAST
                                                                NAME</label>
                                                            <input type="text" class="form-control px-3" />
                                                        </div>
                                                    </div>
                                                    <div class="col mt-2">
                                                        <label for="inputAddress"
                                                            class="form-label mt-3">ADDRESS</label>
                                                        <input type="text" class="form-control px-3"
                                                            id="inputAddress" />
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6 mt-2">
                                                            <label for="inputCountry"
                                                                class="form-label mt-3">COUNTRY</label>
                                                            <select id="inputCountry"
                                                                class="form-select text-light text-dark">
                                                                <option selected>Choose your country</option>
                                                                <option>...</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6 mt-2">
                                                            <label for="inputCity" class="form-label mt-3">CITY</label>
                                                            <input type="text" class="form-control px-3" id="inputCity" />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6 mt-2">
                                                            <label for="inputEmail"
                                                                class="form-label mt-3">EMAIL</label>
                                                            <input type="text" class="form-control px-3"
                                                                id="inputEmail" />
                                                        </div>
                                                        <div class="col-md-6 mt-2">
                                                            <label for="inputPhone"
                                                                class="form-label mt-3">PHONE</label>
                                                            <input type="text" class="form-control px-3"
                                                                id="inputPhone" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div class="row" style={{ marginTop: "7em" }}>
                                            <div class="col-6 text-start">
                                                <button class="btn btn-link p-0 text-decoration-none">
                                                    <i class="fa fa-arrow-left"></i>&nbsp; Return to Merchant
                                                    Site</button>
                                            </div>
                                            <div class="col-6 text-end">
                                                <button class="btn btn-orange nexttab" type="button">CONTINUE</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            
                            <div class="tab-pane mt-3 ms-2 fade" id="pills-verification" role="tabpanel"
                                aria-labelledby="pills-verification-tab">

                                <div class="container">
                                    <h4>OTP Verification</h4>
                                    <p>We've sent a time password to your mobile phone number. Please
                                            enter the OTP below</p>

                                    <div class="row mt-3">
                                        <div class="userInput">
                                            <div class="">
                                                <div class="col-md-12">
                                                    <input class="take" type="text" maxlength="1" />
                                                    <input class="take" type="text" maxlength="1" />
                                                    <input class="take" type="text" maxlength="1" />
                                                    <input class="take" type="text" maxlength="1" />
                                                    <input class="take" type="text" maxlength="1" />
                                                    <input class="take" type="text" maxlength="1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row" style={{ marginTop: "7em" }}>
                                        <div class="col-6 text-start">
                                            <button type="button"
                                                class="btn prevtab btn-outline-orange">BACK</button>
                                        </div>
                                        <div class="col-6 text-end">
                                            <button class="btn btn-orange nexttab" type="button">CONTINUE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="tab-pane mt-3 ms-2 fade" id="pills-offer" role="tabpanel"
                                aria-labelledby="pills-offer-tab">
                                {/* <div class="container" style={{ height: "700px" }}>
                                    <h4>All Offers</h4>
                                    <p class="pg">We've selected the best financing option for you. Select
                                                an offer to get started</p>

                                    <h4>Quick Offers</h4>
                                    <p class="pg">These loans are available to immidiately</p>
                                    <div class="card scroll">

                                        <div class="card">
                                            <div class="card-header" style={{ background: "none" }}>Offer One</div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <p class="payment-inner-p mt-3">REPAYMENT PERIOD</p>
                                                            <h3 class="payment-month">12 Months <span class="icon"><i class="fa fa-calendar-alt"></i></span></h3>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <p class="payment-inner-p mt-3">MONTHLY PAYMENTS</p>
                                                            <h3 class="payment-month">&#8358;120, 000 <span class="icon"><i class="far fa-money-bill-alt"></i></span></h3>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <p class="payment-inner-p" style={{ marginTop: "2.60em" }}>INTREST</p>
                                                            <h3 class="payment-month ">2.5% <span class="icon"><i class="far fa-badge-percent"></i></span></h3>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <button class="btn btn-link2 mt-3 mr-3">TAKE OFFER</button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card mt-4">
                                            <div class="card-header" style={{ background: "none" }}>Offer Two</div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <p class="payment-inner-p mt-3">REPAYMENT PERIOD</p>
                                                            <h3 class="payment-month">12 Months <span class="icon"><i class="fa fa-calendar-alt"></i></span></h3>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <p class="payment-inner-p mt-3">MONTHLY PAYMENTS</p>
                                                            <h3 class="payment-month">&#8358;120, 000 <span class="icon"><i class="far fa-money-bill-alt"></i></span></h3>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <p class="payment-inner-p" style={{ marginTop: "2.60em" }}>INTREST</p>
                                                            <h3 class="payment-month ">2.5% <span class="icon"><i class="fal fa-badge-percent"></i></span></h3>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <button class="btn btn-link2 mt-3 mr-3">TAKE OFFER</button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>


                                        <h4 class="mt-4">24-48 Hours-Offers</h4>
                                        <p class="pg">These loans are available within 24-48 hours</p>
                                        <div class="card">
                                            <div class="card-header" style={{ background: "none" }}>Offer One</div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <p class="payment-inner-p mt-3">REPAYMENT PERIOD</p>
                                                            <h3 class="payment-month">12 Months <span class="icon"><i class="fa fa-calendar-alt"></i></span></h3>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <p class="payment-inner-p mt-3">MONTHLY PAYMENTS</p>
                                                            <h3 class="payment-month">&#8358;120, 000 <span class="icon"><i class="far fa-money-bill-alt"></i></span></h3>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <p class="payment-inner-p" style={{ marginTop: "2.60em" }}>INTREST</p>
                                                            <h3 class="payment-month ">2.5% <span class="icon"><i class="fa fa-badge-percent"></i></span></h3>
                                                        </div>
                                                        <div class="col-md-3">
                                                            <button class="btn btn-link2 mt-3 mr-3">TAKE OFFER</button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>

                                    <div class="row" style={{ marginTop: "5em", marginBottom: "4em" }}>
                                        <div class="col-md-4">
                                            <button class="btn btn-link1">BACK</button>
                                        </div>

                                    </div>
                                 
                                </div> */}

                                <div class="container">
                                        <h4>Offers</h4>
                                        <p class="pg mt-4 mb-4">We've selected the best financing option for you. Select
                                            an offer to get started</p>
                                        <div class="card border-start border-bottom">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <div class="row  mt-0  mb-0">
                                                        <div class="col-md-6">
                                                            <p class="payment-inner-p mt-3">24-48 Hours</p>
                                                        </div>
                                                        <div class="col-md-6 border-start">
                                                            <p class="payment-inner-p mt-3 ml-4">You pay only <span
                                                                    style={{color: "#E56850" , fontSize:"12px"}}>&#8358;
                                                                    120,000</span>
                                                                today</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row text-center">
                                                        <div class="col-md-4">
                                                            <p class="payment-inner-p mt-3">REPAYMENT PERIOD</p>
                                                            <h3 class="payment-month">12 Months</h3>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <p class="payment-inner-p mt-3">MONTHLY PAYMENT</p>
                                                            <h3 class="payment-month">&#8358; 120, 000</h3>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <p class="payment-inner-p mt-3">INTREST</p>
                                                            <h3 class="payment-month">2.5%</h3>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <h5 class="middle-head text-center">Terms and Conditions</h5>
                                                        <p class="middle-para">Lorem ipsum dolor sit amet, consectetur
                                                            adipiscing elit. Odio suscipit
                                                            pulvinar magna quisque tincidunt diam proin id. Quis porta
                                                            massa
                                                            facilisis iaculis lacus tellus nisl,
                                                            ut dignissim. Sagittis ipsum, neque venenatis, vitae sit
                                                            magna.
                                                            Scelerisque tristique egestas morbi
                                                            lorem at. Morbi duis sagittis amet sagittis egestas aliquam
                                                            augue posuere pellentesque. Vitae feugiat
                                                            id volutpat gravida vitae phasellus maecenas quis tristique.
                                                            Eget sit lectus neque eget volutpat
                                                            vitae. Eu volutpat, faucibus magna gravida phasellus odio
                                                            nisl
                                                            ultricies eleifend. Tristique sapien,
                                                            nulla ullamcorper aenean sollicitudin a quis lacus. Sagittis
                                                            molestie ut sollicitudin ullamcorper.
                                                            Id consectetur libero amet, urna purus et. Non cras auctor
                                                            nisl
                                                            aliquet nec proin. Sem non sit urna
                                                            sed a. Natoque nunc tincidunt massa sit pellentesque id.
                                                            Vivamus
                                                            nibh ornare nisi, aliquam nec elementum,
                                                            dictum egestas. Turpis eget ornare a sollicitudin a,
                                                            elementum
                                                            quam velit. Pretium quisque bibendum
                                                            leo massa odio sapien, ut. In tempus morbi viverra magna
                                                            proin
                                                            maecenas. Nisi morbi arcu adipiscing
                                                            nibh dictumst pellentesque velit. Porta amet et cras duis
                                                            facilisi. Tincidunt sed eu elit adipiscing
                                                            sed sodales. Faucibus sed nulla posuere est, elit dolor
                                                            dictum
                                                            mi. Imperdiet hendrerit non urna aliquet ac.
                                                            Odio vitae est feugiat consectetur. Nullam tristique viverra
                                                            ligula cursus dolor ipsum sed. Senectus magnis
                                                            eget mattis adipiscing vitae amet, nibh sit feugiat.
                                                            Hendrerit
                                                            diam, cursus dictumst cursus. Magna
                                                            diam faucibus at non varius a massa aliquet mattis.
                                                            Malesuada
                                                            venenatis interdum quisque
                                                            dui pulvinar nullam. Nulla sit quam nec justo, risus urna.
                                                            Sit
                                                            ut nulla arcu turpis eleifend nibh congue.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="row mb-3" style={{marginTop:"3em"}}>
                                            <div class="col-6 text-start">
                                                <button class="btn btn-outline-orange prevtab"
                                                    type="button">BACK</button>
                                            </div>
                                            <div class="col-6 text-end">
                                                <button class="btn btn-orange nexttab" type="button">AGREE AND
                                                    CONTINUE</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                               
                            <div class="tab-pane mt-3 ms-2 fade" id="pills-repayment" role="tabpanel"
                                    aria-labelledby="pills-repayment-tab">
                                    <div class="container">
                                        <h4>Repayment</h4>
                                        <p>Please select how you would like to make repayments</p>

                                        <div class="row">
                                            
                                            <span class="mb-4 btn-link text-decoration-none"><i class="far fa-credit-card"></i>&nbsp; Pay with Card</span>

                                            <form class="row">
                                                <div class="col-12" >
                                                    <label for="inputAddress" class="form-label">NAME ON
                                                        CARD</label>
                                                    <input type="text" class="form-control" id="inputAddress"
                                                        placeholder=""/>
                                                </div>
                                                <div class="col-12">
                                                    <label for="inputAddress" class="form-label mt-4">CARD
                                                        NUMBER</label>
                                                    <input type="text" class="form-control" id="inputAddress"
                                                        placeholder=""/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail4" class="form-label mt-4">EXPIRY
                                                        DATE</label>
                                                    <input type="email" class="form-control" id="inputEmail4"/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail4" class="form-label mt-4">CVV</label>
                                                    <input type="email" class="form-control" id="inputEmail4"/>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail4" class="form-label mt-4">SELECT AN
                                                        REPAYMENT DATE</label>
                                                    <div class="input-group" id="daterange">

                                                        <input type="text" name="daterange" class="form-control " />
                                                        <span class="input-group-text" style={{background: "none"}}><i
                                                                class="fa fa-calendar"></i></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail4" class="form-label mt-4">BVN</label>
                                                    <input type="email" class="form-control" id="inputEmail4"/>
                                                </div>
                                                <span class="note text-orange text-start mt-3 mb-5">Note: Your account will
                                                    be
                                                    debited on this date</span>
                                            </form>

                                        </div>

                                        <div class="row" style={{marginTop:"2em"}}>
                                            <div class="col-6 text-start">
                                                <button class="btn btn-outline-orange prevtab"
                                                    type="button">BACK</button>
                                            </div>
                                            <div class="col-6 text-end">
                                                <button class="btn btn-orange nexttab" type="button">REVIEW</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                

                                <div class="tab-pane  mt-3 ms-2 fade" id="pills-confirmation" role="tabpanel"
                                    aria-labelledby="pills-confirmation-tab">
                                      <div class="container">
                                      {/* <div class="row">
                                                <h4>Confirmation</h4>
                                                  <p class="pg mt-3">Please review your transaction before submitting</p>
                                                  <div class="card">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">
                                                            <div class="row text-center">
                                                                <div class="">
                                                                    <p class="payment-inner-p mt-3" style={{fontSize:"17px"}}>Total Due &nbsp; <span
                                                                        class="payment-month">&#8358;120,000</span></p>
                                                                
                                                                </div>
        
                                                            </div>
                                                           
                                                        </li>
                                                         <li class="list-group-item">
                                                                <div class="row text-center">
                                                                    <div class="col-md-4">
                                                                        <p class="payment-inner-p mt-3">REPAYMENT PERIOD</p>
                                                                        <h3 class="payment-month">12 Months</h3>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <p class="payment-inner-p mt-3">TOTAL ANOUNT DUE</p>
                                                                        <h3 class="payment-month">&#8358;120, 000</h3>
                                                                    </div>
                                                                    <div class="col-md-4">
                                                                        <p class="payment-inner-p mt-3">INTREST</p>
                                                                        <h3 class="payment-month">2.5%</h3>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <div class="row  justify-content-center text-center">
                                                                    
                                                                    <div class="col-md-4">
                                                                        <p class="payment-inner-p mt-3 mb-1">REPAYMENT DATE</p>
                                                                        <h3 class="payment-month">26th of May</h3>
                                                                        <p class="payment-inner-p">For the next 12months</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                    </ul>
                                                   </div>
                                                   <div class="row" style={{marginTop:"7em"}}>
                                                    <div class="col-8">
                                                        <button
                                                            class="btn btn-link text-blue text-decoration-none text-start"><i
                                                                class="fa fa-arrow-left" style={{paddingRight: "5px"}}></i>Return
                                                            to Marchant Site</button>
                                                    </div>
                                                    <div class="col-4">
                                                        <button class="btn btn-danger justify-content-end"
                                                            type="button">CONFIRM AND PAY</button>
                                                    </div>
                                                </div>
                                            </div> */}

                                        <div class="row">
                                            <h4>Confirmation</h4>
                                            <p class="pg mt-3">Please review your transaction before submitting</p>
                                            <div class="card border-start border-bottom border-secondary">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">
                                                        <div class="row text-center">
                                                            <div class="">
                                                                <p class="fs-4"><span>Hurray! it's time to start packing
                                                                        for
                                                                        your trip</span></p>
                                                                <div>
                                                                    <img src={Group} alt="ready"/>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="row text-center">
                                                            <div class="">
                                                                <p>We have sent details of your trip and this
                                                                    transaction to
                                                                    your email address.</p>
                                                                <p>We have also sent your login details to keep track of
                                                                    your payments.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div class="row" style={{marginTop:"7em"}}>
                                                <div class="col-md-8">
                                                    <button
                                                        class="btn btn-link text-blue text-decoration-none text-start"><i
                                                            class="fa fa-arrow-left"
                                                            style={{paddingRight: "5px"}}></i>Return
                                                        to Marchant Site</button>
                                                </div>
                                                <div class="col-md-4">
                                                    <button class="btn btn-danger justify-content-end"
                                                        type="button">LOGIN
                                                        TO PORTAL</button>
                                                </div>
                                            </div>

                                        </div>
                                      </div>
                                </div>
                             
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};






