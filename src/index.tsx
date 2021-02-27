import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const stockfish = new Worker('./stockfish/stockfish.js');

// stockfish.postMessage('uci');
// stockfish.postMessage('ucinewgame');

// const fen = 'rnbqkbnr/ppppp1pp/8/5p2/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2';

// stockfish.postMessage(`position fen ${fen} d`);

// stockfish.onmessage = function (event: any) {
//   console.log(event);
//   //   console.log(event.data ? event.data : event);
// };

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
