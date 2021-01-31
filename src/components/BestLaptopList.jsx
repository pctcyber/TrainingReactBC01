import React, { Component } from 'react'
import LaptopItem from './LaptopItem'

export default class BestLaptop extends Component {
    render() {
        return (
            <div className='container-fluid'>
                    <h3>BEST LAPTOP</h3>
                    <div className='row'>
                        <LaptopItem/>
                        <LaptopItem/>
                        <LaptopItem/>
                        <LaptopItem/>

                    </div>

            </div>
        )
    }
}
