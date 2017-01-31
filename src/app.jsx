import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
	<div>
	  <Header />
	  <h1>App!</h1>
	  <Footer />
	</div>,
  document.getElementById('root')
);

// 'use strict'
// var React = require('react')
// console.log('loading app.jsx');
// module.exports = React.createClass({
//     displayName: 'HelloReact',
//     render: function(''){
//         return <div>Hello React</div>
//     }
// })

