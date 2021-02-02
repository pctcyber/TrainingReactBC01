import React, { Component } from "react";

export default class HandleEvent extends Component {
    handleClick = () => {
        alert("hello BC01");
    };

    showMessage = (name) => {
        alert("helo" + name)
    }

    render() {
        return (
            <div>

                {/* cach 1: truyen callback truc tiep */}
                <button className="btn btn-success" onClick={this.handleClick}>
                    Click me
                </button>
                <button className="btn btn-success" onClick={this.showMessage.bind(this, "Si")}>
                    showMessage
                </button>
                <br />
                {/* cach 2: truyen ham anonymous */}

                <button onClick={(event) => {

                    // this.showMessage("phu")
                    this.handleClick();
                }}>show mess</button>


            </div>
        );
    }
}
