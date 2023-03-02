// import Article from './components/article/Article';
// import Brand from './components/brand/Brand';
// import CTA from './components/cta/CTA';
// import Navbar from './components/navbar/Navbar';
// import { Article, Feature, CTA, Brand, Navbar } from './components';

import {
  Header,
  Footer,
  Features,
  Posibility,
  WhatGPT3,
  Blog,
} from "./containers";

import { CTA, Brand, NavigationBar } from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
