import React from 'react'
import Button from './Button'


const Header = ({ title }) => {
    const onClick = ((e) => {
        console.log(e.type);
    })
  return (
    <header>
       <h1 className='header'>{title}</h1>
       <Button text='Hello' color='green' onClick = {onClick} />
    </header>
  )
}
// default props
Header.defaultProps = {
    desc : 'I have been implemented using default prop'
}


// CSS in JS
// const styleHeaderHeading = {
//     color: 'blue', 
//     background: 'grey'
// }

export default Header