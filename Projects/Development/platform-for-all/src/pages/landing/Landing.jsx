import { useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaBookOpen } from "react-icons/fa6";
import Button from "../../components/button/Button";
import scrollToSection from "../../utils/scrollToSection"; // Importar la función
import '../landing/Landing.css';
import ImagenInicio from '../../assets/landing/landing-inicio.svg'
import ImagenEnjoy from '../../assets/landing/landing-enjoy.svg'
import ImagenQuestion from '../../assets/landing/landing-question.svg'
import ImagenColabora from '../../assets/landing/landing-colabora.svg'


function Landing() {
    const logo = <FaBookOpen />;
    
    const links = [
        { href: "#inicio", label: "Inicio" },
        { href: "#normativas", label: "Normativas" },
        { href: "#nosotros", label: "Nosotros" },
        { href: "#localizacion", label: "Localización" },
        { href: "#faq", label: "FAQ" },
        { href: "#contactenos", label: "Contáctenos" }
    ];

    // Crear referencias para cada sección
    const inicioRef = useRef(null);
    const normativasRef = useRef(null);
    const nosotrosRef = useRef(null);
    const localizacionRef = useRef(null);
    const faqRef = useRef(null);
    const contactenosRef = useRef(null);

    return (
        <div className="content-landing">
            <div className="headerlanding">
                <div className="navbar-landing">
                    <Navbar
                        logo={logo}
                        links={links.map(link => ({
                            ...link,
                            onClick: () => {
                                switch (link.label) {
                                    case "Inicio":
                                        scrollToSection(inicioRef);
                                        break;
                                    case "Normativas":
                                        scrollToSection(normativasRef);
                                        break;
                                    case "Nosotros":
                                        scrollToSection(nosotrosRef);
                                        break;
                                    case "Localización":
                                        scrollToSection(localizacionRef);
                                        break;
                                    case "FAQ":
                                        scrollToSection(faqRef);
                                        break;
                                    case "Contáctenos":
                                        scrollToSection(contactenosRef);
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }))}
                    />
                </div>
                <div className="button-container">
                    <button >
                        <Button className="buttonsession" title="Iniciar Sesión" variant="link" href="/login" />
                    </button>
                </div>
            </div>
            <div className="contenido-landing">
                <div className="inicio-landing" ref={inicioRef}>
                    <div className="titulo-inicio">
                        <span>Bienvenido</span>
                        <span>a</span>
                        <span>Aprendizaje para Todos</span>
                    </div>
                    <div className="text-inicio">
                        <p className="texto-p-inicio">
                            La biblioteca virtual es una herramienta indispensable en el entorno académico actual, ya que ofrece acceso inmediato a una vasta colección de libros, artículos y recursos educativos desde cualquier lugar y en cualquier momento. Al eliminar las barreras geográficas y de tiempo, permite acceder a información actualizada y relevante para sus estudios o investigaciones.
                        </p>
                    </div>
                    <div className="button-empezar">
                        <button className="button-empezar-register">
                            <Button title="Empezar" variant="link" href="/register" />
                        </button>
                    </div>
                    <div className="imagen-inicio">
                        <img src={ ImagenInicio } alt="" />
                    </div>
                </div>
                <div className="normativas-landing" ref={normativasRef}>
                    <div className="text-enjoy">
                        <div className="subtitulo-enjoy">
                            <span>Disfruta de un amplia</span>
                            <span>cantidad de libros</span>
                        </div>
                        <div className="texto-enjoy">
                            <p className="texto-p-enjoy">
                                Los libros ofrecen múltiples beneficios, ya que amplían el conocimiento, estimulan la imaginación y mejoran las habilidades cognitivas como la concentración y el pensamiento crítico. Además, fomentan la empatía al permitirnos vivir experiencias ajenas a través de los personajes.
                            </p>
                        </div>
                    </div>
                    <div className="imagen-enjoy">
                        <img src={ ImagenEnjoy } alt="" />
                    </div>
                </div>
                <div className="nosotros-landing" ref={nosotrosRef}>
                    <div className="imagen-question">
                        <img src={ ImagenQuestion } alt="" />
                    </div>
                    <div className="text-question">
                        <div className="subtitulo-question">
                            <span>Disfruta de un amplia</span>
                            <span>cantidad de libros</span>
                        </div>
                        <div className="texto-question">
                            <p className="texto-p-question">
                                Los libros ofrecen múltiples beneficios, ya que amplían el conocimiento, estimulan la imaginación y mejoran las habilidades cognitivas como la concentración y el pensamiento crítico. Además, fomentan la empatía al permitirnos vivir experiencias ajenas a través de los personajes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="localizacion-landing" ref={localizacionRef}>
                     <div className="imagen-Colabora">
                        <img src={ ImagenColabora } alt="" />
                    </div>
                    <div className="localizacion-texto-landing">
                        <div className="subtitulo-local">
                            <span>Colabora con otros lectores</span>
                            <span>en los foros</span>
                        </div>
                        <div className="texto-local">
                            <p className="texto-p-local">
                                Los libros ofrecen múltiples beneficios, ya que amplían el conocimiento, estimulan la imaginación y mejoran las habilidades cognitivas como la concentración y el pensamiento crítico. Además, fomentan la empatía al permitirnos vivir experiencias ajenas a través de los personajes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-landing">
                @2024 Aprendizaje para todos. Copyright y Todos los derechos reservados
            </div>
        </div>
    );
}

export default Landing;
