import PropTypes from "prop-types";
import { Button as BootstrapButton } from "react-bootstrap";

function Button({ title, variant, size, href, type, as, value, onClick }) {
    return (
        <BootstrapButton 
            variant={variant}
            size={size}
            href={href}
            type={type}
            as={as}
            value={value}
            onClick={onClick}
        >
            {title || value}
        </BootstrapButton>
    );
}

// Definir PropTypes para la validación
Button.propTypes = {
    title: PropTypes.string,                // El texto que se mostrará en el botón
    variant: PropTypes.oneOf([
        "primary", "secondary", "success", "warning", "danger", 
        "info", "light", "dark", "link",
        "outline-primary", "outline-secondary", "outline-success", 
        "outline-warning", "outline-danger", "outline-info", 
        "outline-light", "outline-dark"
    ]),                                      // Tipos de variantes de Bootstrap
    size: PropTypes.oneOf(["sm", "lg"]),    // Tamaños disponibles: sm (pequeño), lg (grande)
    href: PropTypes.string,                 // Para cuando el botón sea un enlace
    type: PropTypes.oneOf(["button", "submit", "reset"]), // Tipos de botones HTML
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), // Para cambiar el componente subyacente
    value: PropTypes.string,                // Para botones de tipo input
    onClick: PropTypes.func                 // Función que se ejecuta en el evento onClick
};

// Valores predeterminados
Button.defaultProps = {
    variant: "primary",
    size: "md",
    type: "button"
};

export default Button;
