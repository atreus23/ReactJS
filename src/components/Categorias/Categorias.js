import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './Categorias.scss'

function Categorias() {
  return (
    <Dropdown className='categ'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">Categorías</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item><Link className='categoria' to='/Productos/Notebook'>Notebook</Link></Dropdown.Item>
        <Dropdown.Item><Link className='categoria' to='/Productos/Celular'>Celular</Link></Dropdown.Item>
        <Dropdown.Item><Link className='categoria' to='/Productos/Tablet'>Tablet</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Categorias;