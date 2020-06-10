import React from 'react'

const flag = (answerImg) => {
    return (
        <div class="imgContainer">
            <img 
                src={answerImg}
                alt="Country Flag"
                width="400px"
                height="auto"
            />
        </div>
    )
}

export default flag