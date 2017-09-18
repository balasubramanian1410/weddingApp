import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import { Router, Route, Link, browserHistory, History } from 'react-router';
import FlipCard from 'react-flipcard';
const Home = React.createClass({
	displayName:'Home',
	mixins: [ History ],
	contextTypes: {
		// 670px
	},
	getInitialState: function(){
        return { 
        	

    	};
    },
    componentWillMount: function(){
        console.log("component [Home] : is mounting " );
    },
	componentDidMount: function(){
        console.log("component [Home] : is mounted " );
		//alert("hi");
    },
    componentWillUnmount: function(){
        console.log("component [Home] : is unmounting ");
    },
	handleImgClick: function(event){	
		console.log("handleImgClick...");
		var ele = document.getElementsByClassName('ReactFlipCard--enabled');
		console.log(ele);
		for(var i = 0; i < ele.length; ++i){
			ele[i].className = 'ReactFlipCard ReactFlipCard--horizontal ReactFlipCard--enabled slick-slide slick-current slick-active';
		}
		
	},
	render: function() {
		console.log("hi");
		var useTag = '<use class="shape-decor fillWhite" xlink:href="./images/decor.svg#shape-decor"></use>'; 
		var iMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4304188426477!2d80.12236871482307!3d13.071885590790183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52618b975be6a7%3A0xbb94959ec615d333!2sThiruverkadu+Devi+Karumariamman+Temple!5e0!3m2!1sen!2sin!4v1482063758440" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'; 
		return(
		<div className="col-xs-12 home" id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
			<section id='home' className="homeHeight">
			<div className="col-xs-12 topDiv"><div className="col-xs-12 parallax contrast47"></div>
			<a href="#couple" className=" wow zoomIn scroll-link page-scroll homeDown " data-wow-delay="0.7s"><i className="fa fa-arrow-down"></i></a>
			</div>
			<div className="col-xs-12 centerDes">
				<div className="col-xs-12 heartC textCenter wow zoomIn">
				<svg className="heart" viewBox="0 0 32 29.6">
				  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
					c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
				</svg>
				</div>
				<div className="col-xs-12 textCenter decor decor-inverse topDecor wow zoomIn" data-wow-delay="0.1s">
				<svg dangerouslySetInnerHTML={{__html: useTag }} className="decorate posRel left1px" width="281px" height="51px" viewBox="0 0 281 51">				
				</svg>
				</div>
				<div className="col-xs-12 textMarry wow zoomIn" data-wow-delay="0.2s">We're getting married!</div>
				<div className="col-xs-12">
					<div className="couple-name col-xs-12 padd0 displayFlex alignItemsCenter">
					  <div className='floatLeft positionNames displayFlex alignItemsCenter wow zoomIn' data-wow-delay="0.4s">
						  <h1 className="broomName wow bounceInLeft col-xs-12 col-sm-4 col-md-4 col-lg-4" data-wow-delay="0.7s" data-wow-duration="2s">{config.groomName}</h1>
						  <div className='floatLeft heartPosition col-xs-12 col-sm-4 col-md-4 col-lg-4'>
						  <svg className="heart2" viewBox="0 0 32 29.6">
							<path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
								c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
						  </svg>
						  </div>
						  <h1 className="col-xs-12 col-sm-4 col-md-4 col-lg-4 brideName wow bounceInRight" data-wow-delay="0.7s" data-wow-duration="2s">{config.brideName}</h1>
					  </div>
					</div>
				</div>
				<div className="col-xs-12 wow zoomIn">
					<div className='makeDateCenter'>
						<div className="line col-xs-4 wow bounceInLeft " data-wow-delay="0.7s" data-wow-duration="2s"></div>
						<div className="date col-xs-4 wow zoomIn padd0" data-wow-delay="0.5s">{config.marriageDate}</div>
						<div className="line col-xs-4 wow bounceInRight" data-wow-delay="0.7s" data-wow-duration="2s"></div>
					</div>
				</div>
				<div className="col-xs-12 decor decor-inverse displayFlex wow zoomIn" data-wow-delay="0.6s">
				<svg dangerouslySetInnerHTML={{__html: useTag }} className='marginAuto' width="281px" height="51px" viewBox="0 0 281 51">
				</svg>
				</div>
				
				
			</div>
			</section>			
			<nav className="navbar navbar-default navbar-fixed-top navShadow" role="navigation">
				<div className="container parentMenu">
					<div className="navbar-header page-scroll displayFlex">
						<button type="button" className="navbar-toggle marginAuto" data-toggle="collapse" data-target=".navbar-ex1-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>

					<div className="collapse navbar-collapse navbar-ex1-collapse menu" id="nav-head">
						<ul className="nav navbar-nav menu col-xs-12">
							<li className="col-xs-12 col-sm-2 col-md-2 col-lg-2 padd0"><a className="scroll-link page-scroll" href="#home">home</a></li>
							<li className="col-xs-12 col-sm-2 col-md-2 col-lg-2 padd0"><a className="scroll-link page-scroll" href="#couple">couple</a></li>
							<li className="col-xs-12 col-sm-2 col-md-2 col-lg-2 padd0"><a className="scroll-link page-scroll" href="#loveline">loveline</a></li>
							<li className="col-xs-12 col-sm-2 col-md-2 col-lg-2 padd0"><a className="scroll-link page-scroll" href="#People">People</a></li>
							<li className="col-xs-12 col-sm-2 col-md-2 col-lg-2 padd0"><a className="scroll-link page-scroll" href="#events">Events</a></li>
							<li className="col-xs-12 col-sm-2 col-md-2 col-lg-2 padd0"><a className="scroll-link page-scroll" href="#rsvp">rsvp</a></li>
						</ul>
					</div>
				</div>
			</nav>
			<section id="couple" className="intro-section">
				<div className="flowers"></div>
				<div className="col-xs-12">
					<div className="col-xs-12 dummyDiv wow zoomIn">
					<h2 className="coupleTitle">The Couple <span className='titleSpan'><i className="glyphicon glyphicon-heart"></i></span></h2>
					</div>
					<div className="col-xs-12 padd0 displayFlex">
						<div className="col-xs-6 wow groom-color bounceInLeft margin-0-6px" data-wow-duration="2s">
						<div className="col-xs-12 padd0 couple-responsive-padding">
							<div className="the-couple text-center">
								<div className="the-couple-title">
									<p className="groomAllign"><span>Groom</span></p>
								</div>
								<div className="the-couple-img col-xs-12">
									<div className=""> <img src={config.groomImgPath} alt="the-couple image" className="img-circle width50Percent"/>										
									</div>
								</div>
								<div className="the-couple-data wordBreak col-xs-12">
									<h3>{config.groomName}</h3>
									<p>{config.groomBirthDay}</p>
									<p className="about-the-couple">{config.groomDesignation}</p>
								</div>
							</div>
						</div>
						</div>
						<div className="col-xs-6 bride-color wow bounceInRight margin-0-6px" data-wow-duration="2s">
						<div className="col-xs-12 padd0 couple-responsive-padding">
							<div className="the-couple  text-center">
								<div className="the-couple-title">
									<p className="groomAllign"><span>Bride</span></p>
								</div>
								<div className="the-couple-img col-xs-12">
									<div className=""> <img src={config.brideImgPath} alt="the-couple image" className="img-circle width50Percent brideBright"/>										
									</div>
								</div>
								<div className="the-couple-data wordBreak col-xs-12">
									<h3>{config.brideName}</h3>
									<p>{config.brideBirthday}</p>
									<p className="about-the-couple">{config.brideDesignation}</p>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</section>

    
    <section id="loveline" className="loveline-section">
        
		<div className="col-xs-12 setHeightLoveLibe">
			<h2 className="coupleTitle allignLoveline wow zoomIn">Loveline<span className='titleSpan wow zoomIn'><i className="glyphicon glyphicon-heart"></i></span></h2>
		</div>
		<div className="col-xs-12 textCenter"> 
			<div><img className="img wow zoomIn" src="./images/loveline-vector.png" alt="vector-img"/></div> 
		</div>
		<div className="col-xs-12">
			<ul className="timeline wow slideInUp" data-wow-duration="3s">
				{config.loveLine.map(function(key,index){
				if(index % 2 == 0){
				return(
					<li className="wow bounceInLeft"  data-wow-duration="2s">
						<div className="timeline-badge"><a><i className="glyphicon glyphicon-heart"></i></a></div>
						<div className="timeline-panel timeline-panel-normal wow bounceInLeft">
							<div className="timeline-heading">
								<h3 className="timeline-title">{key.title}</h3>
								<span className="label label-default">{key.date}</span> 
							</div>
							<div className="timeline-body">
								<p>{key.content}</p>
							</div>
						</div>
					</li>
				)
				}else{
				return(
					<li className="timeline-inverted wow bounceInRight" data-wow-duration="2s">
						<div className="timeline-badge"><a><i className="glyphicon glyphicon-heart"></i></a></div>
						<div className="timeline-panel">
							<div className="timeline-heading">
								<h3 className="timeline-title">{key.title}</h3>
								<span className="label label-default">{key.date}</span> 
							</div>
							<div className="timeline-body">
								<p>{key.content}</p>
							</div>
						</div>
					</li>
				)
				}
				}.bind(this))
				}
				<li className="clearfix no-float"></li>
			</ul>
		</div>
		
		<div className="col-xs-12 countDown">
			<div className="flowers wow zoomIn"></div>
			
			<div className="col-xs-12 topDiv wow zoomIn">
				<div className="col-xs-12 parallax">
					<h2 className="countText">Counting Down to Our Big Day</h2>
					<div className="col-xs-12 countHeartLine wow pulse" data-wow-iteration="infinite">
					<span className="titleSpan wow zoomIn"><i className="glyphicon glyphicon-heart"></i></span>
					</div>
					<div className="col-xs-12 countWidth">
											<div className="wed-comsoon-counter">
												<span className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.1s">
													<img src="./images/si.png" alt=""/>
													<div>{config.marriageDate}</div>	
												</span>												
												<ul className="countdown">
													<li className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
														<span className="days">230</span>
														<p className="days_ref">days</p>
													</li>
													<li className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.5s">
														<span className="hours">02</span>
														<p className="hours_ref">hours</p>
													</li>
													<li className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.7s">
														<span className="minutes">29</span>
														<p className="minutes_ref">minutes</p>
													</li>
													<li className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.9s">
														<span className="seconds">56</span>
														<p className="seconds_ref">seconds</p>
													</li>
												</ul>
											</div>
											
											<div id="countdowntimer" className="dispNone"><span id="future_date"></span></div>
					</div>
				</div>
			</div>
			<div className="col-xs-12">
			
			</div>
		</div>
    </section>

    <section id="People" className="services-section">
        <div className="col-xs-12 setHeightLoveLibe">
			<h2 className="coupleTitle allignLoveline wow zoomIn">People<span className='titleSpan wow zoomIn'><i className="glyphicon glyphicon-heart"></i></span></h2>
		</div>
		<div className="col-xs-12">
			
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" onClick={this.handleImgClick}>
				<div className="slider-for1 wow bounceInLeft col-xs-12">
				  <div className="bigPic">
					  <div className="peopleDetails">
							  <div className="peopleDetailsContainer default">
								  <div className='marginAuto alignVerticalCenter'>
									  <h1 className="titles">Groom family</h1>
									  <h1 className="titles">Slide to view image</h1>
									  <h1 className="titles">Flip to view details</h1>								  
								  </div>
							  </div>
					  </div>
				  </div>
				  {config.people.groomFamily.map(function(key,index){
				  return(
						<FlipCard>
						  
						  <div className="bigPic">
							  <div className="peopleDetails">
								  <div className="peopleDetailsContainer">
								  <div className='marginAuto'>
									  <div className=""><img className='borderRadis50' src={key.imgPath} alt="the-couple"/></div>
								  </div>	  
								  </div>
							  </div>
						  </div>
						  <div className="bigPic">
							  <div className="peopleDetails">
								  <div className="peopleDetailsContainer">
								  <div className='marginAuto alignVerticalCenter'>
									  <div className="titles">Groom family</div>
									  <div className="peopleName">{key.name}</div>
									  <div className="peopleName">{key.relation}</div>
									  <div className="peopleName">{key.designation}</div>
								  </div>	  
								  </div>
							  </div>
						  </div>
						</FlipCard>	
				  )
				  }.bind(this))}
				</div>
				<div className="slider-nav1 navSlick wow zoomIn col-xs-12">
				  <div className="slickImg familyCircle">
					<div className="dummyText makeDivSqare">
								  <div className="col-xs-12 noPadd alignVerticalCenter">
								  Groom family
								  Slide to view
								  </div>
					</div>
				  </div>
				  {config.people.groomFamily.map(function(key,index){
				  return(
					  <div className="slickImg familyCircle"><img src={key.imgPath} alt="the-couple"/></div>
				  )
				  }.bind(this))}
				  
				  
				</div>
				
			</div>
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				<div className="slider-for2 wow bounceInRight">
				  <div className="bigPic">
					  <div className="peopleDetails">
							  <div className="peopleDetailsContainer default">
							  <div className='marginAuto alignVerticalCenter'>
								  <h1 className="titles">Bride family</h1>
								  <h1 className="titles">updating soon</h1>
								  <h1 className="titles"></h1>
							  </div>	  
							  </div>
					  </div>
				  </div>
				  <div className="bigPic">
					  <div className="peopleDetails">
							  <div className="peopleDetailsContainer default">
							  <div className='marginAuto alignVerticalCenter'>
								  <h1 className="titles">Bride family</h1>
								  <h1 className="titles">updating soon</h1>
								  <h1 className="titles"></h1>
							  </div> 	  
							  </div>
					  </div>
				  </div>
				  <div className="bigPic">
					  <div className="peopleDetails">
							  <div className="peopleDetailsContainer default">
							  <div className='marginAuto alignVerticalCenter'>
								  <h1 className="titles">Bride family</h1>
								  <h1 className="titles">updating soon</h1>
								  <h1 className="titles"></h1>
							  </div>	  
							  </div>
					  </div>
				  </div>
				  <div className="bigPic">
					  <div className="peopleDetails">
							  <div className="peopleDetailsContainer default">
							  <div className='marginAuto alignVerticalCenter'>
								  <h1 className="titles">Bride family</h1>
								  <h1 className="titles">updating soon</h1>
								  <h1 className="titles"></h1>
							  </div>	  
							  </div>
					  </div>
				  </div>
				  
				  {/*config.people.brideFamily.map(function(key,index){
				  return(
						<FlipCard>
						  <div className="bigPic">{<img src={key.imgPath} alt="the-couple"/>}</div>
						  <div className="bigPic">
							  <div className="peopleDetails">
								  <div className="peopleDetailsContainer">
									  <h1 className="titles">Bride family</h1>
									  <div className="peopleName">{key.name}</div>
									  <div className="peopleName">{key.relation}</div>
									  <div className="peopleName">{key.designation}</div>
								  </div>
							  </div>
						  </div>
						</FlipCard>	
				  )
				  }.bind(this))*/}
				  
				  
				</div>
				<div className="slider-nav2 navSlick wow zoomIn col-xs-12">
				  <div className="slickImg familyCircle">
					<div className="dummyText makeDivSqare">
								  <div className="col-xs-12 noPadd alignVerticalCenter">
								  Bride family
								  Slide to view
								  </div>
					</div>
				  </div>
				  
				  {config.people.brideFamily.map(function(key,index){
				  return(
					<div className="slickImg familyCircle">{/*<img src={key.imgPath} alt="the-couple"/>*/}</div>	
				  )
				  }.bind(this))}
				  
				</div>
			</div>
		</div>
    </section>

    <section id="events" className="services-section">
        <div className="col-xs-12 setHeightLoveLibe">
			<h2 className="coupleTitle allignLoveline wow zoomIn">Events<span className='titleSpan wow zoomIn'><i className="glyphicon glyphicon-heart"></i></span></h2>
		</div>
		<div className="col-xs-12 eventHeight">			
			<div className="event-tabs col-xs-12 displayFlex">
				<div className="event-title wow bounceInRight col-xs-3 padd0" data-wow-delay="0.1s">
					{/*<div className="title style3">
						
					</div>*/}
					<div className='makeDivSquare posBox margin5px'> 
						<div className='makeDiv4thQuadrent'><div className='transform5050'>Event <br/> <span>Schedule</span></div></div>
					</div>
					<ul className="nav navbar-nav eventsList">
						<li className="active">
							<a data-toggle="tab" href="#event-tab1">
								<div className='col-xs-12 col-md-3 col-lg-4 padd0'><i className="fa diamondPos fa-diamond"></i></div>
								<div className='col-xs-12 col-md-9 col-lg-8 padd0'>Wedding Ceremony</div>
							</a>
						</li>
						<li className="">
							<a data-toggle="tab" href="#event-tab2"> 
								<div className='col-xs-12 col-md-3 col-lg-4 padd0'><i className="fa fa-spoon"></i></div>
								<div className='col-xs-12 col-md-9 col-lg-8 padd0'>Reception Ceremony</div>
							</a>
						</li>
					</ul>
				</div>
				<div className="tab-content padd0 col-xs-9">
					<div className="tab-pane active" id="event-tab1">
					<div className="event-schedule displayFlex">
						<div className="event-venue wow bounceInRight col-xs-4 padd0" data-wow-delay="0.2s">
							<div className="ti1">
								<h4>Venue</h4>
							</div>
							<div className="event-loc">
								<img src="./images/design.png" alt=""/>
								<h2>{config.weddingPlace}</h2>
								<i><span>Wedding</span> Ceremony</i>
							</div>
							<div className="event-time displayFlex flexDirCol">
								<span>{config.weddingDay}</span>
								<h2>{config.weddingDateMonth}</h2>
								<i>{config.weddingYear}</i>
								<span className="time">{config.weddingTime}</span>
							</div>
							<ul className="event-address displayFlex flexDirCol">
								<li className='col-xs-12 padd0 displayFlex alignItemsCenter'>
									<div className='widthAuto'><i className="fa fa-home"></i></div>
									<div className='widthAuto'><strong>Address:</strong><span>{config.wedAddress}</span><span><img className="locationImg wow bounce" data-wow-delay="1s" src="./images/map-marker-13.png"/></span></div>
								</li>
								<li className='col-xs-12 padd0 displayFlex alignItemsCenter'>
									<div className='widthAuto'><i className="fa fa-phone"></i></div>
									<div className='widthAuto'><strong>Phone:</strong>{config.wedPhone}</div>
								</li>
								<li className='col-xs-12 padd0 displayFlex alignItemsCenter'>
									<div className='widthAuto'><i className="fa fa-envelope"></i></div>
									<div className='widthAuto'><strong>Email:</strong> <a href="#" title="">{config.wedEmail}</a></div>
								</li>
							</ul>
						</div>
						<div className="ceremony-details wow bounceInRight col-xs-8 padd0" data-wow-delay="0.3s">
							<div className="ti1">
								<h4>Ceremony details</h4>
							</div>
							<div className="cerevent-detail">
								<div className="event-detail-inner">
									<span><img src={config.weddingLocationImgPath} alt=""/></span>
									<h2>{config.weddingPlace}</h2>
									<ul className="rating">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-o"></i></li>
									</ul>
									<p>{config.aboutWedPlace}</p>
									<div className="hotel-view">
										<span className="inner-title">Temple View:</span>
										<ul>
											<li><a href="#" title=""><img src={config.weddingPlaceView1ImgPath} alt=""/></a></li>
											<li><a href="#" title=""><img src={config.weddingPlaceView2ImgPath} alt=""/></a></li>
											<li><a href="#" title=""><img src={config.weddingPlaceView3ImgPath} alt=""/></a></li>
											<li><a href="#" title=""><img src={config.weddingPlaceView4ImgPath} alt=""/></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
					<div className="tab-pane" id="event-tab2">
					<div className="event-schedule displayFlex">
						<div className="event-venue wow bounceInRight col-xs-4 padd0" data-wow-delay="0.2s">
							<div className="ti1">
								<h4>Venue</h4>
							</div>
							<div className="event-loc">
								<img src="./images/design.png" alt=""/>
								<h2>{config.receptionPlace}</h2>
								<i><span>Reception</span> Ceremony</i>
							</div>
							<div className="event-time displayFlex flexDirCol">
								<span>{config.receptionDay}</span>
								<h2>{config.receptionDateMonth}</h2>
								<i>{config.receptionYear}</i>
								<span className="time">{config.receptionTime}</span>
							</div>
							<ul className="event-address displayFlex flexDirCol">
								<li className='col-xs-12 padd0 displayFlex alignItemsCenter'>
									<div className='widthAuto'><i className="fa fa-home"></i></div>
									<div className='widthAuto'><strong>Address:</strong><span>{config.recAddress}</span><span><img className="locationImg second wow bounce" data-wow-delay="1s" src="./images/map-marker-13.png"/></span></div>
								</li>
								<li className='col-xs-12 padd0 displayFlex alignItemsCenter'>
									<div className='widthAuto'><i className="fa fa-phone"></i></div>
									<div className='widthAuto'><strong>Phone:</strong>{config.recPhone}</div>
								</li>
								<li className='col-xs-12 padd0 displayFlex alignItemsCenter'>
									<div className='widthAuto'><i className="fa fa-envelope"></i></div>
									<div className='widthAuto'><strong>Email:</strong> <a href="#" title="">{config.recEmail}</a></div>
								</li>
							</ul>
						</div>
						<div className="ceremony-details wow bounceInRight col-xs-8 padd0" data-wow-delay="0.3s">
							<div className="ti1">
								<h4>Ceremony details</h4>
							</div>
							<div className="cerevent-detail">
								<div className="event-detail-inner">
									<span><img src={config.receptionLocationImgPath} alt=""/></span>
									<h2>{config.receptionPlace}</h2>
									<ul className="rating">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star-half-o"></i></li>
									</ul>
									<p>{config.aboutRecPlace}</p>
									<div className="hotel-view">
										<span className="inner-title">Hotel View:</span>
										<ul>
											<li><a href="#" title=""><img src={config.receptionPlaceView1ImgPath} alt=""/></a></li>
											<li><a href="#" title=""><img src={config.receptionPlaceView2ImgPath} alt=""/></a></li>
											<li><a href="#" title=""><img src={config.receptionPlaceView3ImgPath} alt=""/></a></li>
											<li><a href="#" title=""><img src={config.receptionPlaceView4ImgPath} alt=""/></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
					<div className='locationScreen dispNone2' dangerouslySetInnerHTML={{__html: iMap }}>
				
					</div>
				</div>
			</div>
			
			
		</div>
    </section>
	
	<section id="rsvp" className="services-section">
        <div className="col-xs-12 setHeightLoveLibe">
			<h2 className="coupleTitle allignLoveline wow zoomIn">Rsvp<span className='titleSpan wow zoomIn'><i className="glyphicon glyphicon-heart"></i></span></h2>
		</div>
		<div className="col-xs-12 bg-light-gray rsvp">
						
						<p className="wow fadeInUp" data-wow-delay="0.1s"> We would like to get your response for our marriage to plan in advance before<br/>
                        <span className="wow fadeInUp" data-wow-delay="0.1s">27 Jan 2017</span> </p>
						<div id ="submitLoad">
							<img src="images/progress.gif" className="wow zoomIn"/>
							<div className="wow zoomIn">Please wait! submitting your details...</div>
						</div>
						<form className="form floating-label text-left form-validate" name="frm" id="frm">
                        <div className="form-group wow fadeInUp" data-wow-delay="0.2s">
                              <input type="text" className="form-control" id="Name" name="Name" required="" data-rule-minlength="2" aria-required="true"/>                           
							  <label for="Name">Name</label>
                        </div>
                        
                        <div className="form-group wow fadeInUp" data-wow-delay="0.3s">
                              <input type="text" className="form-control" id="Detail" name="Detail" required="" data-rule-minlength="2" aria-required="true"/>                           
							  <label for="Name">Detail</label>
                        </div>
                        <div className="row wow fadeInUp" data-wow-delay="0.5s">
                            <div className="col-md-4">
								<div className="form-group">
                                  <select id="attendiesDetails" name="attendiesDetails" className="form-control select2-list dirty" required="" aria-required="true">
									<option value="">Select Presense</option>
									<option value="Yes - Marriage">Yes - Marriage</option>
									<option value="Yes - Reception">Yes - Reception</option>
									<option value="Yes - Marriage-Reception">Yes - Marriage-Reception</option>
									<option value="No">No</option>
									<option value="Not Sure">Not Sure</option>
								  </select>
                                  <label for="attendiesDetails">I am attending?</label>
                                </div>
							</div>
                            <div className="col-md-4">
								<div className="form-group">
                                  <select id="guestDetails" name="guestDetails" className="form-control select2-list dirty" required="" aria-required="true">
									<option value="">Select Attendee(s)</option>
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">4</option>
									<option value="3">5</option>
									<option value="3">6</option>
								  </select>
                                  <label for="guestDetails">Number of Guests</label>
								</div>
							</div>
							<div className="col-md-4">
								<div className="form-group">
                                  <select id="guestSide" name="guestDetails" className="form-control select2-list dirty" required="" aria-required="true">
									<option value="">Select from</option>
									<option value="Bride">Bride's side</option>
									<option value="Groom">Groom's side</option>
								  </select>
                                  <label for="guestDetails">Guests Of</label>
								</div>
							</div>
                            </div>
                        <div className="form-group wow fadeInUp" data-wow-delay="0.6s">
                              <textarea className="form-control" id="comments" name="message"></textarea>
                              <label>Drop Comments</label>
                        </div>
						<div className="form-group wow fadeInUp" data-wow-delay="0.6s">
                              <textarea className="form-control" id="song" name="message"></textarea>
                              <label>Song you would like to play at our reception</label>
                        </div>
                        <div className="rsvp-button text-center wow fadeInUp" data-wow-delay="0.7s">
                              <button type="submit" id="submitButton" className="hvr-sweep-to-right">SUBMIT</button>
                            </div>
                      </form>
					  
        </div>
		
    </section>
	
			<section id='saveData' className="saveHeight parallax">					
			<div className="col-xs-12 centerDes">
				<div className="col-xs-12 heartC wow zoomIn">
					<svg className="heart" viewBox="0 0 32 29.6">
					  <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
						c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
					</svg>
				</div>
				<div className="col-xs-12 textCenter decor decor-inverse topDecor wow zoomIn" data-wow-delay="0.1s">
				<svg dangerouslySetInnerHTML={{__html: useTag }} className="decorate posRel left1px" width="281px" height="51px" viewBox="0 0 281 51">				
				</svg>
				</div>
				<div className="col-xs-12 textMarry wow zoomIn" data-wow-delay="0.2s">Thank you</div>
				<div className="col-xs-12 textMarry wow zoomIn" data-wow-delay="0.2s">Save the date</div>
				<div className="col-xs-12">
					<div className="couple-name col-xs-12 padd0 displayFlex alignItemsCenter">
					  <div className='floatLeft positionNames displayFlex alignItemsCenter wow zoomIn' data-wow-delay="0.4s">
						  <h1 className="broomName wow bounceInLeft col-xs-12 col-sm-4 col-md-4 col-lg-4" data-wow-delay="0.7s" data-wow-duration="2s">{config.groomName}</h1>
						  <div className='floatLeft heartPosition col-xs-12 col-sm-4 col-md-4 col-lg-4'>
						  <svg className="heart2" viewBox="0 0 32 29.6">
							<path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
								c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
						  </svg>
						  </div>
						  <h1 className="col-xs-12 col-sm-4 col-md-4 col-lg-4 brideName wow bounceInRight" data-wow-delay="0.7s" data-wow-duration="2s">{config.brideName}</h1>
					  </div>
					</div>
				</div>
				<div className="col-xs-12 wow zoomIn">
					<div className='makeDateCenter'>
						<div className="line col-xs-4 wow bounceInLeft " data-wow-delay="0.7s" data-wow-duration="2s"></div>
						<div className="date col-xs-4 wow zoomIn padd0" data-wow-delay="0.5s">{config.marriageDate}</div>
						<div className="line col-xs-4 wow bounceInRight" data-wow-delay="0.7s" data-wow-duration="2s"></div>
					</div>
				</div>
				<div className="col-xs-12 decor decor-inverse displayFlex wow zoomIn" data-wow-delay="0.6s">
				<svg dangerouslySetInnerHTML={{__html: useTag }} className='marginAuto' width="281px" height="51px" viewBox="0 0 281 51">
				</svg>
				</div>
				
				
			</div>
			<a href="#home" className="scroll-link page-scroll wow zoomIn"><i className="fa fa-arrow-up"></i></a>
			</section>
	
		</div>
		)
	}
});

module.exports = Home;