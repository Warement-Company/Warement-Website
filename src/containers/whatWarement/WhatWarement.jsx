import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatWarement.css';

const WhatWarement = () => (
  <div className="gpt3__whatgpt3 section__margin" id="warement">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Warement" text="We seek to ensure that our customers have the best possible experience with our sales team and our services. We guarantee you a quality service, and an incredible experience with our services." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p><a href="/services">Explore our services</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Ideation & App Prototyping" text="Creating many ideas in ideation sessions. Adopting a hands-on approach in prototyping. Developing a testable prototype/solution to the problem" />
      <Feature title="Product Design" text="We have skilled designers to help you choose the best design for your product." />
      <Feature title="Web Development" text="We have the best developers on the market to make your idea come out of the paper." />
    </div>
  </div>
);

export default WhatWarement;
