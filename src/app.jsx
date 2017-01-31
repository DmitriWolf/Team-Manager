import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MessageList from './components/MessageList';
import Footer from './components/Footer';

ReactDOM.render(
	<div id="app">
	  <Header />
	  <MessageList />
	  <Footer />
	</div>,
  document.getElementById('root')
);
