import PropTypes from "prop-types";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import '../navbar/Navbar.css'

function Navbar({ logo, links }) {
  return (
    <BootstrapNavbar expand="lg" className="navbar-components">
      <Container className="navbar-container">
        <BootstrapNavbar.Brand className="navbar-logo">
          {typeof logo === "string" ? (
            <img src={logo} alt="Logo" className="logo-img" />
          ) : (
            logo
          )}
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="navbar-links">
            {links.map((link) => (
              <Nav.Link href={link.href} key={link.label}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

// Definir los PropTypes para la validación
Navbar.propTypes = {
  logo: PropTypes.oneOfType([
    PropTypes.string,       // URL de la imagen
    PropTypes.element,      // Componente de React (por ejemplo, un icono)
  ]).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Valores predeterminados para las props
Navbar.defaultProps = {
  links: [],
};

export default Navbar;
