/* Styles */
import './posts.styles.css';

/* Components */
import { PostCard } from '../post-card/post-card.component';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.length !== 0 ? posts.map(post => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    )) : <p>There are no posts =(</p>}
  </div>
);