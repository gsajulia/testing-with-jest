/* Styles */
import './post-card.styles.css';

export const PostCard = ({title, cover, body, id}) => (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content">
                <h1>
                    <b>{id} - Personagem:</b>
                     {title}
                </h1>
                <p>{body}</p>
            </div>
        </div>
)