import React, { Component } from 'react';
import Loading from '../components/loading';
import RevealAnswer from '../components/answer';

class AnswerContainer extends Component {

    render () {

        const { answerName, passed, answered, correct, start, countries } = this.props;
        const revealTheAnswer = RevealAnswer({ answerName, passed, answered, correct });
        const loadMsg = Loading({ countries, start, passed, correct, answered });

        return (

            <div className='gameAnswerContainer'>

              {revealTheAnswer}

              {loadMsg}

            </div>

        )
    }

}

export default AnswerContainer