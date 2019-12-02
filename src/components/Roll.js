import React, { Component } from 'react';
import dice1 from "../img/dice1.png";
import dice2 from "../img/dice2.png";
import dice3 from "../img/dice3.png";
import dice4 from "../img/dice4.png";
import dice5 from "../img/dice5.png";
import dice6 from "../img/dice6.png";
import lose from "../img/lose.png";
import win from "../img/win.png";

class Roll extends Component {
    state = {
        diceNumber: 0,
        total: 0,
        image: "",
    }

    roll = () => {
        let number = Math.floor(Math.random() * 6 + 1);
        this.setState({
            diceNumber: number
        })
    }

    total = () => {
        this.setState({ total: this.state.diceNumber + this.state.total })
    }

    display = () => {
        if (this.state.diceNumber === 1) {
            this.setState({ image: lose });
        }
        else if (this.state.diceNumber === 1 && this.state.total === 19) {
            this.setState({ image: dice1 });
        }
        else if (this.state.diceNumber === 2) {
            this.setState({ image: dice2 });
        }
        else if (this.state.diceNumber === 3) {
            this.setState({ image: dice3 });
        }
        else if (this.state.diceNumber === 4) {
            this.setState({ image: dice4 });
        }
        else if (this.state.diceNumber === 5) {
            this.setState({ image: dice5 });
        }
        else if (this.state.diceNumber === 6) {
            this.setState({ image: dice6 });
        }
    }

    click = async () => {
        await this.roll();
        await this.display();
        await this.total();
        await this.win();
    }

    win =() =>{
        if (this.state.total >= 20) {
            this.setState({ image: win });
        }
    }

    reset = () => {
        this.setState({
            diceNumber: 0,
            total: 0,
            image: "",
        });
    }

    render() {

        return (
            <div className="box">
             <div id="roll">
                    <button className="button" onClick={this.click}>Roll The Dice</button>
                    <button className="button" onClick={this.reset}>Reset</button>
                </div>
                <h1>{this.state.total}</h1>
                <img src={this.state.image} alt=""/>
            </div>
        )
    }
}

export default Roll
