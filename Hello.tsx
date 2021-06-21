import React from 'react';

import Button from './Button';

export default ({ name, counter, updateCounter }) => (
  <div>
    <Button counter={counter} updateCounter={updateCounter} incrementBy={1} />
    <Button counter={counter} updateCounter={updateCounter} incrementBy={3} />
    <Button counter={counter} updateCounter={updateCounter} incrementBy={5} />
    <Button counter={counter} updateCounter={updateCounter} incrementBy={7} />
    <h1>{counter}</h1>
  </div>
);
