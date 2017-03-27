import React from 'react';
import * as Coins from './coins.jsx';

var Calculator = React.createClass({
    getInitialState: function() {
        return {
            quartersValue: this.props.quartersValue,
            dimesValue: this.props.dimesValue,
            nickelsValue: this.props.nickelsValue,
            penniesValue: this.props.penniesValue,
            amountEntered: this.props.amountEntered
        };
    },
    quartersValueChange: function(event) {
        this.setState({quartersValue: event.target.value});
    },
    dimesValueChange: function(event) {
        this.setState({dimesValue: event.target.value});
    },
    nickelsValueChange: function(event) {
        this.setState({nickelsValue: event.target.value});
    },
    penniesValueChange: function(event) {
        this.setState({penniesValue: event.target.value});
    },
    amountEnteredValueChange: function(event) {
        this.setState({amountEntered: event.target.value});
    },
    render: function () {
        var coins = [
            {
                name: 'quartersValue',
                denomination: this.state.quartersValue,
                total: 0
            },
            {
                name: 'dimesValue',
                denomination: this.state.dimesValue,
                total: 0
            },
            {
                name: 'nickelsValue',
                denomination: this.state.nickelsValue,
                total: 0
            },
            {
                name: 'penniesValue',
                denomination: this.state.penniesValue,
                total: 0
            }
        ];

        var coinValues = coins.map(function(coin) {
            return (
                <div className="calc-card-circle-container" key={coin.name}>
                    <span className="coin-counter-badge">
                        {coin.total}
                    </span>

                    <div className="coin-counter-circle">
                        <div className="coin-counter-circle-text">
                            {coin.denomination}
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="content">
                <div className="calc-card">
                    {coinValues}

                    <div className="form">
                        <div>
                            <input type="text" value={this.state.quartersValue} onChange={this.quartersValueChange}/>
                        </div>

                        <div>
                            <input type="text" value={this.state.dimesValue} onChange={this.dimesValueChange}/>
                        </div>

                        <div>
                            <input type="text" value={this.state.nickelsValue} onChange={this.nickelsValueChange}/>
                        </div>

                        <div>
                            <input type="text" value={this.state.penniesValue} onChange={this.penniesValueChange}/>
                        </div>

                        <div>
                            <input type="text" value={this.state.amountEntered} onChange={this.amountEnteredValueChange}/>
                        </div>
                    </div>

                    <div>
                        <button className="coin-counter-button">CALCULATE</button>
                    </div>
                </div>
            </div>
        );
    }
});

export default Calculator;
