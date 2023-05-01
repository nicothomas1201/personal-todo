import Check from "./check"
import Trash from "./trash"

function Index({ name, ...props}) {
  switch(name){
    case 'check': {
      return <Check {...props} />
    }

    case 'trash': {
      return <Trash {...props} />
    }

    default: {
      return <span>No se ha dado soporte a ese icono</span>
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: '#ffffff'
}

export default Index
