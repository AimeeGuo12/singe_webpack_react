import React from 'react'
import './index.less'
// import { Router, Route, Link } from 'react-router'
import { Route, Link, Switch  } from 'react-router-dom';
function RouterBream () {

    
    return (
        <div>
            {/* <Router> */}
                <ul>
                <li>
                        <Link to='/'>导航0</Link>
                        <span>/</span>
                    </li>
                    <li>
                        <Link to='/about'>导航1</Link>
                        <span>/</span>
                    </li>
                </ul>
                {/* <Switch> */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                {/* </Switch> */}
                
            {/* </Router> */}

        </div>
    )
}

export default RouterBream;

function About() {
    return (
        <div>
            About
        </div>
    )
}
function Home() {
    return (
        <div>
            Home
        </div>
    )
}

function DisplayItem(itemData) {

    return (
        <div>
            {itemData.map((item) => {
                return
            })}
        </div>
    )
}