import React, { Component } from 'react'

class CountryCard extends Component {

    render() {

        let output

        if (this.props.incorrect) {
            output = this.props.incorrect.map((c, i) => {
                return (

                    <div className="card" id="country-card" key={i}>
                        <div className="card-body">
                            <p className="card-text" style={{textAlign: 'center'}}>
                                {c.Country}
                            </p>
                        </div>
                        <img
                            className="card-img-top"
                            src={c.Flag}
                            alt={c.Country}
                            style={{width: "18rem", height: "9rem"}}
                        />
                    </div>

                )
            })

        } else {
            output = this.props.correct.map((c, i) => {
                return (

                    <div className="card" id="country-card" key={i}>
                        <div className="card-body">
                            <p className="card-text" style={{textAlign: 'center'}}>
                                {c.Country}
                            </p>
                        </div>
                        <img
                            className="card-img-top"
                            src={c.Flag}
                            alt={c.Country}
                            style={{width: "18rem", height: "9rem"}}
                        />
                    </div>

                )
            })

        }

        return (

            <div id="country-card-container" >

                {output}

            </div>

        )
    }
}

export default CountryCard;