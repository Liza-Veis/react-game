const stockfish = new Worker(`${process.env.PUBLIC_URL}/stockfish.js`);

stockfish.postMessage('uci');
stockfish.postMessage('ucinewgame');
stockfish.postMessage('setoption name MultiPV value 3');
stockfish.postMessage('setoption name Minimum Thinking Time value 500');

export default stockfish;
