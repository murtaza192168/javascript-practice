import PropTypes from 'prop-types'
const Button = ({text,color, onClick}) => {
    // const onClick = ((e) => {
    //     console.log(e.type);
    // }) // construc this and pass invoke this func in button element down: But always this is a component and a component may not have the same clicks.. for this reason lets use props by going and buildiing this func in Header(where our Button compnent is present)
  return (
    <button style={{backgroundColor: color}} onClick={onClick} className='btn'>{text}</button>
    
  )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button