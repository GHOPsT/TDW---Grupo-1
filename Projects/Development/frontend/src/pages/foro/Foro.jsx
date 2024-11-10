import React, { useState } from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import '../../component/sidebar/sidebar.css';
import './Foro.css';
import { FaThumbsUp, FaThumbsDown, FaReply, FaTrash, FaUser, FaBook, FaForumbee, FaEdit, FaPlus } from 'react-icons/fa';
import postData from '../../data/post.json'; // Importar el JSON de datos
import Cookies from 'js-cookie'; // Importar la librería de cookies

function Foro() {
  const [posts, setPosts] = useState(postData);
  const [showReply, setShowReply] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // New post states
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostDescription, setNewPostDescription] = useState("");

  // Obtener el nombre y correo del usuario desde las cookies
  const nombreUsuario = Cookies.get('nombreUsuario') || 'Usuario';
  const correoUsuario = Cookies.get('correoUsuario') || 'correo@ejemplo.com';

  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts
    .filter(post => post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || post.descripcion.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(indexOfFirstPost, indexOfLastPost);

  const handleToggleReply = (postId) => {
    setShowReply((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleLike = (postId) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId ? { ...post, liked: true, disliked: false } : post
      )
    );
  };

  const handleDislike = (postId) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId ? { ...post, liked: false, disliked: true } : post
      )
    );
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleAddResponse = (postId, response) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            respuestas: [...post.respuestas, response],
          };
        }
        return post;
      })
    );
    setShowReply((prev) => ({ ...prev, [postId]: false }));
  };

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      titulo: newPostTitle,
      descripcion: newPostDescription,
      autor: "Usuario Test",
      respuestas: [],
    };
    setPosts([...posts, newPost]);
    setNewPostTitle("");
    setNewPostDescription("");

    // Update the JSON file (this part won't work in the browser; needs a server-side solution)
    // writeFileSync('../../data/post.json', JSON.stringify([...posts, newPost], null, 2));
  };

  // Change page
  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPosts.length === postsPerPage) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        userType="admin"
        profileImg="https://cdn.britannica.com/49/39749-050-E773E614/Max-Weber-1918.jpg"
        name={nombreUsuario} // Usar el nombre del usuario desde cookies
        email={correoUsuario} // Usar el correo del usuario desde cookies
        links={[
          { icon: <FaUser />, title: 'Gestionar Usuario', path: '/user' },
          { icon: <FaForumbee />, title: 'Gestionar Foro', path: '/forum' },
          { icon: <FaBook />, title: 'Gestionar Libros', path: '/books' },
        ]}
      />
      <div className="main-content">
        <div className="forum-container">
          <div className="forum-header">
            <h2 className="forum-title">Foro Profesional</h2>
            <button className="btn-back" onClick={() => window.history.back()}>Regresar al Inicio</button>
          </div>
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* New Post Form */}
          <div className="new-post-container">
            <input
              type="text"
              placeholder="Título del nuevo post"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              className="new-post-input"
            />
            <textarea
              placeholder="Descripción del nuevo post"
              value={newPostDescription}
              onChange={(e) => setNewPostDescription(e.target.value)}
              className="new-post-textarea"
            />
            <button className="btn-create" onClick={handleAddPost}>
              <FaPlus /> Crear
            </button>
          </div>
          <div className="posts-container">
            {currentPosts.map((post) => (
              <div className="post" key={post.id}>
                <h3 className="post-title">{post.titulo}</h3>
                <p className="post-description">{post.descripcion}</p>
                <p className="post-author">Publicado por: {post.autor}</p>
                <div className="post-actions">
                  <button className="btn-like" onClick={() => handleLike(post.id)} disabled={post.liked}>
                    <FaThumbsUp />
                  </button>
                  <button className="btn-dislike" onClick={() => handleDislike(post.id)} disabled={post.disliked}>
                    <FaThumbsDown />
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(post.id)}>
                    <FaTrash />
                  </button>
                  <button className="btn-reply" onClick={() => handleToggleReply(post.id)}>
                    <FaReply />
                  </button>
                </div>

                {showReply[post.id] && (
                  <div className="reply-container">
                    <textarea className="reply-input" placeholder="Escribe tu respuesta aquí..." />
                    <div className="reply-actions">
                      <button
                        className="btn-submit"
                        onClick={() => handleAddResponse(post.id, { texto: "Respuesta de prueba", autor: "Usuario Test" })}
                      >
                        Enviar
                      </button>
                      <button className="btn-cancel" onClick={() => handleToggleReply(post.id)}>Cancelar</button>
                    </div>
                  </div>
                )}

                {post.respuestas.length > 0 && (
                  <div className="responses-container">
                    <h4 className="responses-title">Respuestas:</h4>
                    {post.respuestas.map((resp, index) => (
                      <div className="response" key={index}>
                        <p className="response-text">{resp.texto} - <strong>{resp.autor}</strong></p>
                        <div className="response-actions">
                          <button className="btn-edit"><FaEdit /></button>
                          <button className="btn-delete"><FaTrash /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination-controls">
            <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>Anterior</button>
            <span>Página {currentPage}</span>
            <button onClick={() => handlePageChange('next')} disabled={currentPosts.length < postsPerPage}>Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foro;
