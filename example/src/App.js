import React from 'react'

import { Button } from 'sharpui'
import 'sharpui/dist/index.css'

const App = () => {
  return (
    <>
      <div className='center'>
        <br />
        <br />
        <br />
        <Button text='click' type='primary' />
        <br />
        <br />
        <br />
        <Button text='click' />
        <br />
        <br />
        <br />
        <Button text='click' type='dashed' />
        <br />
        <br />
        <br />
        <Button text='click' type='text' />
        <br />
        <br />
        <br />
        <Button text='click' type='link' />
      </div>
    </>
  )
}

export default App
