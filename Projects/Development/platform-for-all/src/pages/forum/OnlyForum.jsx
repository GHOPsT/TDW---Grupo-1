import { useParams } from 'react-router-dom';
import './OnlyForum.css';
import useForumData from '../../hooks/manage-forum/onflyForumDataHook';

function OnlyForum() {
    const { id } = useParams();
    const { forums } = useForumData();
    const forum = forums.find((forum) => forum.id === parseInt(id));

    if (!forum) return <div>Foro no encontrado</div>;

    return (
        <div className="mainonlyforum">
            <div className="onlyforo">
                <div className="authorforum">
                    <div className="profile">
                        <img src={forum.profileImage} alt="Autor" />
                        <span>{forum.author}</span>
                        <span>{forum.timeAgo}</span>
                    </div>
                </div>
                <div className="forum">
                    <h1>{forum.title}</h1>
                    <div className="contentforum">{forum.content}</div>
                    <div className="tags">
                        {forum.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="toanswer">
                <div className="field">
                    <textarea placeholder="Responder al foro..."></textarea>
                </div>
                <div className="buttonsforum">
                    <button>Cancelar</button>
                    <button>Responder</button>
                </div>
            </div>
            <div className="answers">
                {forum.comments.map((comment, index) => (
                    <div key={index} className="usersrespond">
                        <div className="profileuserrespond">
                            <img src={comment.profileImage} alt="Usuario" />
                            <div className="datetime">{comment.date}</div>
                            <div className="contentanswer">{comment.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OnlyForum;
