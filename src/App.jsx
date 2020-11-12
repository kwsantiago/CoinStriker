import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Team from './components/Team';
import Contact from './components/contact';
import InvestmentStrategy from './components/InvestmentStrategy.jsx';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <InvestmentStrategy data={this.state.landingPageData.InvestmentStrategy} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
