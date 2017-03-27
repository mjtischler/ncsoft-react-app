import React from 'react';
import * as Coins from './coins.js';

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
        var coins = Coins.calculateCoins(this.state.quartersValue, this.state.dimesValue, this.state.nickelsValue, this.state.penniesValue, this.state.amountEntered);

        return (
            <div className="content">
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
            </div>
        );
    }
});

export default Calculator;
