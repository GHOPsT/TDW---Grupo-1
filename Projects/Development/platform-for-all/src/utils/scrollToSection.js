// src/utils/scrollToSection.js

/**
 * Función que realiza el desplazamiento a una sección específica en la página.
 * @param {object} sectionRef - La referencia de la sección a la cual desplazarse.
 */
const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
};

export default scrollToSection;
