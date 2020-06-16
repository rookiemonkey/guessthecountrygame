import React, { Component } from 'react';

class Heart extends Component {
    render() {
        return (
            <span style={{ margin: "0px 5px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="whitesmoke" width="15" height="15" viewBox="0 0 24 24">
                    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                </svg>
            </span>
        )
    }
}

export default Heart;