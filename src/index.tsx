import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';

import './index.scss';
import { configureStore } from './rootReducer';
import { Navigation, HomePage, AboutPage, GalleriesPage } from 'baseframe';
import reportWebVitals from './reportWebVitals';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={configureStore()}>
  <BrowserRouter>
    <Navigation />
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="galleries" element={<GalleriesPage />} />
      </Routes>
    </Container>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
