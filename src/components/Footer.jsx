import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className ='p-5 bg-dark '>

                <h3 className='text-white'>PROMOTION</h3>
                <div className="container bg-light pt-5 pb-5">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="container">
                                <img src="./img/promotion_1.png" alt style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="container">
                                <img src="./img/promotion_2.png" alt style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <div className="container">
                                <img src="./img/promotion_3.jpg" alt style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
