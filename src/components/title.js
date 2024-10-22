import React, { Component } from "react";

class Title extends Component {
    render() {
        return (
            <header className="gameTitleContainer">
                <h4>
                    <strong>Guess the Country Flag Game  </strong>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="whitesmoke"width="30" height="30" viewBox="0 0 24 24"><path d="M4 24h-2v-24h2v24zm18-21.387s-1.621 1.43-3.754 1.43c-3.36 0-3.436-2.895-7.337-2.895-2.108 0-4.075.98-4.909 1.694v12.085c1.184-.819 2.979-1.681 4.923-1.681 3.684 0 4.201 2.754 7.484 2.754 2.122 0 3.593-1.359 3.593-1.359v-12.028z"/></svg>
                </h4>
            </header>
        )
    }
}

export default Title