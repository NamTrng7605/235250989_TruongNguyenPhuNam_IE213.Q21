import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) { setUser(user); }
  async function logout() { setUser(null); }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/movies"}>Movies</Nav.Link>
          <Nav.Link>
            {user ? (
              <a onClick={logout} href="#">Log out User</a>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </Nav.Link>
        </Nav>
      </Navbar>

      <Switch>
  <Route exact path={["/", "/movies"]} component={MoviesList} />
  <Route 
    path="/movies/:id/review" 
    render={(props) => (
      <AddReview {...props} user={user} />
    )} 
  />
  <Route 
    path="/movies/:id/" 
    render={(props) => (
      <Movie {...props} user={user} />
    )} 
  />
  <Route 
    path="/login" 
    render={(props) => (
      <Login {...props} login={login} />
    )} 
  />
</Switch>
    </div>
  );
}