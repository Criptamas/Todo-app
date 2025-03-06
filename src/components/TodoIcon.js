import { ReactComponent as CheckSVG } from './complete.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'
import './TodoIcon.css'

const todoIcon =
{
  "check": (color)=> <CheckSVG
    className='Icon-svg'
    fill={color}
  />,
  "delete": (color)=> <DeleteSVG
    className='Icon-svg'
    fill={color}
  />
}

function TodoIcon ({type, color, onClick}){


  return(
    <span className={`
      Icon-container
      Icon-container-${type}
    `}
    onClick={onClick}
    >
      {todoIcon[type](color)}
    </span>
  )
}

export { TodoIcon }