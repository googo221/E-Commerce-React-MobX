import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { rootStore } from './stores/root-store';
import { unregister } from './serviceWorker';
import 'mobx-react-lite/batchingForReactDom';

ReactDOM.render(
  <Provider rootStore={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

unregister();
