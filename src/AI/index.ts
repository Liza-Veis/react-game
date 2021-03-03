const stockfish = new Worker('./stockfish/stockfish.js');

stockfish.postMessage('uci');
stockfish.postMessage('ucinewgame');

stockfish.postMessage('setoption name MultiPV value 3');
stockfish.postMessage('setoption name Minimum Thinking Time 500');

export default stockfish;
