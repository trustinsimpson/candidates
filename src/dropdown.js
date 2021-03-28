import { Dropdown, DropdownButton } from 'react-bootstrap';


function Drop() {
  return (
  <DropdownButton className='centered' id="dropdown-basic-button" title="Candidates">
    <div className='scrollBox'>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </div>
  </DropdownButton>
  );
}

export default Drop;

