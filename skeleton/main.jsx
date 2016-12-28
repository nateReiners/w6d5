import Tabs from './tabs';
import React from 'react';

const tabs = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'I am the second'}, 
  {title: 'three', content: 'I am the third' }
];

const Main = () => (
  <div className="main">
    <div className="tabs-div">
      <Tabs tabList={tabs} />
    </div>

    <div className="autocomplete-div">
    </div>
  </div>
);


export default Main;
