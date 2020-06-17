import React, { Component } from 'react'

class CountryCard extends Component {

    render() {

        let output

        if (this.props.incorrect) {
            output = this.props.incorrect.map((c, i) => {
                return (

                    <React.Fragment key={i} >
                         <img
                            className="card-img-top"
                            src={c.Flag}
                            alt={c.Country}
                            style={{width: "18rem", height: "auto"}}
                        />
                        <div className="card-body">
                            <p className="card-text">
                                {c.Country}
                            </p>
                        </div>
                    </React.Fragment>

                )
            })

        } else {
            output = this.props.correct.map((c, i) => {
                return (

                    <React.Fragment key={i} >
                        <img
                            className="card-img-top"
                            src={c.Flag}
                            alt={c.Country}
                            style={{width: "18rem", height: "auto"}}
                        />
                        <div className="card-body">
                            <p className="card-text">
                                {c.Country}
                            </p>
                        </div>
                    </React.Fragment>

                )
            })

        }


        return (

            <div className="card" style={{width: "18rem"}}>

                {output}

            </div>

        )
    }
}

export default CountryCard;