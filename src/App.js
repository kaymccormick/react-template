import React from 'react';
import ReactDOM from 'react-dom';
import('expat-wasm').then(x => {
    console.log(x);
});

class App extends React.Component {
    render() {
	return <h1>hello</h1>;
    }
}

export default App;
