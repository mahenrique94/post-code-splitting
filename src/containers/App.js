import PropTypes from 'prop-types'
import React from 'react'

import { Link } from 'react-router-dom'

import './App.css'

const App = ({ children }) => (

    <div className="App">
        <header className="App-header">
            <nav className="App-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/a">A</Link></li>
                    <li><Link to="/b">B</Link></li>
                    <li><Link to="/c">C</Link></li>
                </ul>
            </nav>
            { children }
        </header>
    </div>
)

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ])
}

export default App;
