import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/ConfigureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {loadCourses} from './actions/CourseActions';
import {loadAuthors} from './actions/AuthorActions';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
