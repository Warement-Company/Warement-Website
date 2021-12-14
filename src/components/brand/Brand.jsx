import React from 'react';
import { expressdev, gamerprizes, placasexpress } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={expressdev} />
    </div>
    <div>
      <img src={gamerprizes} />
    </div>
    <div>
      <img src={placasexpress} />
    </div>
  </div>
);

export default Brand;
