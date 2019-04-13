import React from 'react';
import ReacDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReacDOM.render(<Root store={configureStore()}/>, root);
});