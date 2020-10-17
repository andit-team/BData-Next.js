import React from 'react'
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { BsCheckBox } from "react-icons/bs";
import SectionHeading from '../SectionHeading/SectionHeading'


const Pricing=()=> {
 return (
  <>
      <section className="pricing-section">
        <div className="container">
            <SectionHeading title="Our Pricing Plan" heading={"Data Solutions For Startup"}/>
            <div className="row">
             <div className="col-lg-12 col-sm-12 col-12">
             <Tab.Container id="left-tabs-example" defaultActiveKey="monthly">
                <div className="tabs-box">
                    <div className="upper-box clearfix">
                     <div className="tab-btn-box">
                        <Nav className="nav nav-tabs tab-btns tab-buttons tab-title">
                          <Nav.Item>
                             <Nav.Link className="tab-btn active-btn" eventKey="monthly">Monthly</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link  className="tab-btn" eventKey="yearly">Yearly</Nav.Link>
                             </Nav.Item>
                          </Nav>
                          </div>
                    </div>
                    <div className="tabs-content">
                    <Tab.Content>
                    <Tab.Pane eventKey="monthly">
                    <div>
                            <div className="row clearfix praent">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 pricing-block">
                                    <div className="pricing-table box-shadow border-radius">
                                        <div className="pricing-table-header">
                                            <h3>Standard Package</h3>
                                            <h2>$70</h2>
                                        </div>
                                        <div className="pricing-table-content">
                                            <ul>
                                                <li>
                                                 <i><BsCheckBox/></i> Unlimited Campaigns
                                                </li>
                                                <li>
                                                <i><BsCheckBox/></i> Basic Donor Data
                                                </li>
                                                <li>
                                                <i><BsCheckBox/></i> Team Fundraising
                                                </li>
                                                <li>
                                                <i><BsCheckBox/></i> Weekly Campaigns
                                                </li>
                                                <li className="disabled">
                                                <i><BsCheckBox/></i> Data Analysis
                                                </li>
                                                <li className="disabled">
                                                <i><BsCheckBox/></i> Data Analytics
                                                </li>
                                                <li className="disabled">
                                                <i><BsCheckBox/></i> Daily Report Delivery
                                                </li>
                                                <li className="disabled">
                                                <i><BsCheckBox/></i> Business Prediction
                                                </li>
                                            </ul>
                                            <div className="pricing-table-btn text-center">
                                                <a className="btn btn-pricing" href="#!">BUY NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 pricing-block single-item-mt-2">
                                    <div className="pricing-table box-shadow border-radius">
                                        <div className="pricing-table-header">
                                            <h3>Standard Package</h3>
                                            <h2>$60</h2>
                                        </div>
                                        <div className="pricing-table-content">
                                            <ul>
                                                <li>
                                                <i><BsCheckBox/></i> Unlimited Campaigns
                                                </li>
                                                <li>
                                                <i><BsCheckBox/></i> Basic Donor Data
                                                </li>
                                                <li>
                                                <i><BsCheckBox/></i> Team Fundraising
                                                </li>
                                                <li>
                                                <i><BsCheckBox/></i> Weekly Campaigns
                                                </li>
                                                <li className="disabled">
                                                <i><BsCheckBox/></i> Data Analysis
                                                </li>
                                                <li className="disabled">
                                                <i><BsCheckBox/></i> Data Analytics
                                                </li>
                                                <li className="disabled">
                                                <i><BsCheckBox/></i> Daily Report Delivery
                                                </li>
                                                <li className="disabled">
                                                <i><BsCheckBox/></i> Business Prediction
                                                </li>
                                            </ul>
                                            <div className="pricing-table-btn text-center">
                                                <a className="btn btn-pricing" href="#!">BUY NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 pricing-block">
                                    <div className="pricing-table box-shadow border-radius responsive-mt-30">
                                        <div className="pricing-table-header">
                                            <h3>Standard Package</h3>
                                            <h2>$80</h2>
                                        </div>
                                        <div className="pricing-table-content">
                                            <ul>
                                                <li>
                                                <i><BsCheckBox/></i> Unlimited Campaigns
                                                </li>
                                                <li>
                                                    <i><BsCheckBox/></i> Basic Donor Data
                                                </li>
                                                <li>
                                                    <i><BsCheckBox/></i> Team Fundraising
                                                </li>
                                                <li>
                                                    <i><BsCheckBox/></i> Weekly Campaigns
                                                </li>
                                                <li className="disabled">
                                                    <i><BsCheckBox/></i> Data Analysis
                                                </li>
                                                <li className="disabled">
                                                    <i><BsCheckBox/></i> Data Analytics
                                                </li>
                                                <li className="disabled">
                                                    <i><BsCheckBox/></i> Daily Report Delivery
                                                </li>
                                                <li className="disabled">
                                                    <i><BsCheckBox/></i> Business Prediction
                                                </li>
                                            </ul>
                                            <div className="pricing-table-btn text-center">
                                                <a className="btn btn-pricing" href="#!">BUY NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="yearly">
                      <div>
                            <div className="row  clearfix praent"> 
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 pricing-block ">
                                    <div className="pricing-table box-shadow border-radius">
                                        <div className="pricing-table-header">
                                            <h3>Standard Package</h3>
                                            <h2>$10</h2>
                                        </div>
                                        <div className="pricing-table-content">
                                            <ul>
                                                <li>
                                                    <i><BsCheckBox/></i> Unlimited Campaigns
                                                </li>
                                                <li>
                                                   <i><BsCheckBox/></i> Basic Donor Data
                                                </li>
                                                <li>
                                                   <i><BsCheckBox/></i> Team Fundraising
                                                </li>
                                                <li>
                                                   <i><BsCheckBox/></i> Weekly Campaigns
                                                </li>
                                                <li className="disabled">
                                                   <i><BsCheckBox/></i> Data Analysis
                                                </li>
                                                <li className="disabled">
                                                   <i><BsCheckBox/></i> Data Analytics
                                                </li>
                                                <li>
                                                   <i><BsCheckBox/></i> Daily Report Delivery
                                                </li>
                                                <li>
                                                    <i className="icofont-tick-boxed "></i> Business Prediction
                                                </li>
                                            </ul>
                                            <div className="pricing-table-btn text-center">
                                                <a className="btn btn-pricing" href="#!">BUY NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 pricing-block single-item-mt-2">
                                    <div className="pricing-table box-shadow border-radius">
                                        <div className="pricing-table-header">
                                            <h3>Standard Package</h3>
                                            <h2>$20</h2>
                                        </div>
                                        <div className="pricing-table-content">
                                            <ul>
                                                <li>
                                                   <i><BsCheckBox/></i> Unlimited Campaigns
                                                </li>
                                                <li>
                                                   <i><BsCheckBox/></i> Basic Donor Data
                                                </li>
                                                <li>
                                                   <i><BsCheckBox/></i> Team Fundraising
                                                </li>
                                                <li>
                                                <i><BsCheckBox/></i> Weekly Campaigns
                                                </li>
                                                <li>
                                                <i><BsCheckBox/></i> Data Analysis
                                                </li>
                                                <li>
                                                <i><BsCheckBox/></i> Data Analytics
                                                </li>
                                                <li className="disabled">
                                                   <i><BsCheckBox/></i> Daily Report Delivery
                                                </li>
                                                <li className="disabled">
                                                <i><BsCheckBox/></i> Business Prediction
                                                </li>
                                            </ul>
                                            <div className="pricing-table-btn text-center">
                                                <a className="btn btn-pricing" href="#!">BUY NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12 pricing-block responsive-mt-30">
                                    <div className="pricing-table box-shadow border-radius">
                                        <div className="pricing-table-header">
                                            <h3>Standard Package</h3>
                                            <h2>$40</h2>
                                        </div>
                                        <div className="pricing-table-content">
                                            <ul>
                                                <li className="disabled">
                                                  <i><BsCheckBox/></i> Unlimited Campaigns
                                                </li>
                                                <li >
                                                  <i><BsCheckBox/></i> Basic Donor Data
                                                </li>
                                                <li>
                                                  <i><BsCheckBox/></i> Team Fundraising
                                                </li>
                                                <li>
                                                  <i><BsCheckBox/></i> Weekly Campaigns
                                                </li>
                                                <li className="disabled">
                                                   <i><BsCheckBox/></i> Data Analysis
                                                </li>
                                                <li>
                                                   <i><BsCheckBox/></i> Data Analytics
                                                </li>
                                                <li>
                                                   <i><BsCheckBox/></i> Daily Report Delivery
                                                </li>
                                                <li className="disabled">
                                                   <i><BsCheckBox/></i> Business Prediction
                                                </li>
                                            </ul>
                                            <div className="pricing-table-btn text-center">
                                                <a className="btn btn-pricing" href="#!">BUY NOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                    </div>
                </div>
                </Tab.Container>
             </div>
            </div>
        </div>
    </section>
  </>
 )
}

export default Pricing
