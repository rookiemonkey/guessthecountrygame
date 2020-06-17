import React, { Component } from 'react';
import GameStart from '../components/start';
import Pass from '../components/pass';
import Proceed from '../components/proceed';
import CheckAnswer from '../components/checkAnswer';

class ButtonsContainer extends Component {

    render() {

        const { setChoices, revealAnswer, nextQuestion, checkAnswer, start, passed, answered } = this.props

        return (

        <div className="gameButtonsContainer">

          <GameStart
            setChoices={setChoices}
            start={start}
          />

          <Pass
            revealAnswer={revealAnswer}
            start={start}
            passed={passed}
            answered={answered}
          />

          <Proceed
            nextQuestion={nextQuestion}
            passed={passed}
            answered={answered}
          />

          <CheckAnswer
            checkAnswer={checkAnswer}
            start={start}
            passed={passed}
            answered={answered}
          />

        </div>

        )
    }

}

export default ButtonsContainer;