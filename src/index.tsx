import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.scss';
import rootReducer from './rootReducer';
import Navigation from './baseframe/Navigation';
import Home from './baseframe/pages/Home';
import About from './baseframe/pages/About';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer);

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Navigation />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Container>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
