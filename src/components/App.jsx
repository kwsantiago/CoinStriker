import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
import InvesmentStrategy from './InvestmentStrategy';
import About from './about';
import Services from './services';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './contact';
import $ from 'jquery';

export class App extends Component {
  state = {
    resumeData : {},
  }
  getResumeData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <div>
        <Navigation />
        <Header data={this.state.resumeData.Header}/>
        <InvestmentStrategy data={this.state.resumeData.InvestmentStrategy}/>
        <About  data={this.state.resumeData.About}/>
        <Services  data={this.state.resumeData.Services}/>
        <Gallery />
        <Testimonials  data={this.state.resumeData.Testimonials}/>
        <Team  data={this.state.resumeData.Team}/>
        <Contact  data={this.state.resumeData.Contact}/>
      </div>
      </meta>
    )
  }
}

export default App
