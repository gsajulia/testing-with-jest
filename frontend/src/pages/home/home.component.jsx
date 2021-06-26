import { useEffect, useState, useCallback } from 'react';

/* Styles */
import './styles.css';

/* Components */

/* Api */
import { loadPosts } from './../../api/load-posts';

export const Home = () => {
    const maxPagePosts = 10;
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);

    const handleLoadPosts = useCallback(async () => {
        const postsAndPhotos = await loadPosts();
    
        setPosts(postsAndPhotos.slice(0, maxPagePosts));
        setAllPosts(postsAndPhotos);
      }, [])
    
      useEffect(() => {
        handleLoadPosts();
      }, [handleLoadPosts]);

  return (
      <div>
          {console.log(allPosts)}
      </div>
  )

}

export default Home;
