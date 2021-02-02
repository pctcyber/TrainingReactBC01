
import React, { Component } from 'react'

export default class ChonXe extends Component {

    state = {

        imgSrc: './img/car/products/black-car.jpg'
    };


    changColor = (color)=>{

        // thay doi gia tri hinh dua vao bien mau
        this.setState ({
            imgSrc: `./img/car/products/${color}-car.jpg`
        })
    }



    render() {
        return (
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-6">

                        <img className='w-100' src={this.state.imgSrc} alt="sai duong dan" />
                    </div>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <button onClick ={(event)=>{

                                    this.changColor('red')
                                }}>red car</button>
                            </div>
                            <div className="col-4">
                                <button onClick ={(event)=>{
                                    this.changColor("silver")
                                }}>silver car</button>
                            </div>
                            <div className="col-4">
                                <button onClick={(event)=>{
                                    this.changColor('black')
                                }}>black car</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
