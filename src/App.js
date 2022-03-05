import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Component/layout';
import {BrowserRouter as Router} from 'react-router-dom';

App.propTypes = {
  
};

function App(props) {
  return (
    <Router>
      <div>
        <Layout></Layout>
      </div>
    </Router>
  );
}

export default App;