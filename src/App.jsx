// import Home from "./Components/Home"; // Adjust the path as needed
// import Read from "./Components/Read";
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import Create from "./Components/Create";
// import Delete from "./Components/Delete";
// import Update from "./Components/Update";

// function App() {
//   return (
//     <Router>
//       <div className="container-fluid">
//         <div className="extra-column"></div>
//         <div className="flex-row">
//           <div className="column"></div>
//           <Navbar expand="lg" bg="body-tertiary">
//             <Container fluid>
//               <Navbar.Brand href="#">CRUD DEMO</Navbar.Brand>
//               <Navbar.Toggle aria-controls="navbarNavDropdown" />
//               <Navbar.Collapse id="navbarNavDropdown">
//                 <Nav className="me-auto mb-2 mb-lg-0">
//                   <Link to="/Home" className="nav-link">Home</Link>
//                   <NavDropdown title="Manage Users" id="navbarScrollingDropdown">
//                     <Link to="/Read" className="dropdown-item">View Users</Link>
//                     <Link to="/Create" className="dropdown-item">Create a New User</Link>
//                     <Link to="/Update" className="dropdown-item">Edit / Update a User</Link>
//                     <Link to="/Delete" className="dropdown-item">Delete a User</Link>
//                   </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                   <FormControl
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//           <div className="column"></div>
//         </div>
//         <div className="extra-column"></div>

//         <Routes>
//           <Route path="/Home" element={<Home />} />
//           <Route path="/Read" element={<Read />} />
//           <Route path="/Create" element={<Create />} />
//           <Route path="/Delete" element={<Delete />} />
//           <Route path="/Update" element={<Update />} />
//           {/* Add routes for other components */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import Home from "./Components/Home"; // Adjust the path as needed
import Read from "./Components/Read";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Create from "./Components/Create";
import Delete from "./Components/Delete";
import Update from "./Components/Update";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="extra-column"></div>
        <div className="flex-row">
          <div className="column"></div>
          {/* Apply a separate background color to the navbar */}
          <Navbar expand="lg" bg="light" variant="light" style={{ borderBottom: '1px solid #ccc' }}>
            <Container fluid>
              <Navbar.Brand href="#">CRUD DEMO</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarNavDropdown" />
              <Navbar.Collapse id="navbarNavDropdown">
                <Nav className="me-auto mb-2 mb-lg-0">
                  <Link to="/" className="nav-link">Home</Link>
                  <NavDropdown title="Manage Users" id="navbarScrollingDropdown">
                    <Link to="/Read" className="dropdown-item">View Users</Link>
                    <Link to="/Create" className="dropdown-item">Create a New User</Link>
                    <Link to="/Update" className="dropdown-item">Edit / Update a User</Link>
                    <Link to="/Delete" className="dropdown-item">Delete a User</Link>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="column"></div>
        </div>
        <div className="extra-column"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Read" element={<Read />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/Update" element={<Update />} />
          {/* Add routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
