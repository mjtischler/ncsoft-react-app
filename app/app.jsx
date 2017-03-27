import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Calculator from './components/calculator/calculator.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <Header title="NCSOFT Coin Calculator"/>
                <Calculator quartersValue="25" dimesValue="10" nickelsValue="5" penniesValue="1" amountEntered="0"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
