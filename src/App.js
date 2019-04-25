import React from 'react'
import logo from './tcv.jpg'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Testing Practices and Principles</h1>
        <p>
          Please run the project with <code>npm run test</code>
        </p>

        <h6 className='Authors'>
          <a
            className='User-link'
            href='https://github.com/PMiraLopes'
            target='_blank'
            rel='noopener noreferrer'
          >
            Pedro Lopes - pedro.lopes@thecodeventure.com
          </a>
          <a
            className='User-link'
            href='https://github.com/xrofa'
            target='_blank'
            rel='noopener noreferrer'
          >
            Christian Sousa - christian.sousa@thecodeventure.com
          </a>
        </h6>

        <a
          className='App-link'
          href='https://www.thecodeventure.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <code>www.thecodeventure.com</code>
        </a>
      </header>
    </div>
  )
}

export default App
