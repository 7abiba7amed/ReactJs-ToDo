import { MDBNavbar, MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer tag="form" fluid className="justify-content-start">
        <MDBBtn outline color="primary" className="me-2" type="button">
          <Link to="/">Home</Link>
        </MDBBtn>
        <MDBBtn outline color="success" size="sm" type="button">
          <Link to="/add-todo">Add ToDo</Link>
        </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default NavBar;
