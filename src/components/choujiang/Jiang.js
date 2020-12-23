import React, {Component} from 'react';

class Jiang extends Component{
    
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div className='left'>
                <div className='turnplate'>
                    <canvas className='item' id='wheelcanvas' width='406px' height='406px'></canvas>
                    <img className='pointer' src="" alt=""/>
                </div>
            </div>
        )
    }
}