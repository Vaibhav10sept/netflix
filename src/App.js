
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./NavBar";
import Footer from "./Footer";
import React, { Component } from "react";
import { CubeGrid } from 'styled-loaders-react'

export default class App extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 loading:true
		}
	}
	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				loading:false
			})
		},5000)
	}
  render() {
    return (
	
      <div className="app">
		  {this.state.loading ?
		<div className="preloader">
			Developed by: Vaibhav Tiwari
			<div> <br/>	
			<CubeGrid size="80px" color="white"/>
			

			</div>
			<img
        className="preloader-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

		</div>
		: 
		<div> 
		<Nav />
	  <Banner />
	  <Row
		title="NETFLIX ORIGINALS"
		isLargeRow
		fetchUrl={requests.fetchNetflixOriginals}
	  />
	  <Row title="Trending" fetchUrl={requests.fetchTrending} />
	  <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
	  <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
	  <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
	  <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
	  <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
	  <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
	  <Footer /> 
	  </div>
		}
        
      </div>
    );
  }
}
