import React from 'react'

const flag = (answerImg) => {
    return (
        <div className="imgContainer">
            <img
                src={answerImg}
                alt="Country Flag"
                width="350px"
                height="233px"
            />
        </div>
    )
}

export default flag