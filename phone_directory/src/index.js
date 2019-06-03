import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import './common/common.css'
import PhoneDirectory from './PhoneDirectory';
// import registerServiceWorker from './serviceWorker';


ReactDOM.render(<PhoneDirectory/>, document.getElementById('root'));
// ReactDOM.render(<AddSubscriber/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// All components must be capitalized..... Stateful Componenet
// registerServiceWorker();