import React from 'react';

const App = (props) => {
  let retval;
  if (!props.completedWizard) {
      retval = <div id="TestDiv"> Setup Area </div>;
  }
  return retval;
};

export default App;
