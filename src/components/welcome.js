import React from 'react';
import Counter from '../containers/counter';
import Controls from '../containers/controls';

const Welcome = (props) => {
  return (
    <div>
      Welcome
      <Counter />
      <Controls />
    </div>
  );
};

export default Welcome;
