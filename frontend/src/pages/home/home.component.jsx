import { useEffect, useState, useCallback } from 'react';

/* Styles */
import './home.styles.css';

/* Components */
import { Posts } from '../../components/posts/posts.component';
import { Input } from '../../components/input/input.component';

/* Api */
import { loadPosts } from './../../api/load-posts';

export const Home = () => {
    const maxPagePosts = 10;
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const filteredPosts = !!searchValue ?
        allPosts.filter(post => {
            return post.title.toLowerCase().includes(
                searchValue.toLowerCase()
            );
        })
        :
        posts;

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }

    const handleLoadPosts = useCallback(async () => {
        const postsAndPhotos = await loadPosts();

        setPosts(postsAndPhotos.slice(0, maxPagePosts));
        setAllPosts(postsAndPhotos);
    }, [])

    useEffect(() => {
        handleLoadPosts();
    }, [handleLoadPosts]);

    return (
        <section className="container">
            <div className="search-container">
                {!!searchValue && (
                    <>
                        <h1>Search value: {searchValue}</h1>
                    </>
                )}

                <Input
                    searchValue={searchValue}
                    handleChange={handleChange} />
            </div>

            {filteredPosts.length > 0 && (
                <Posts posts={filteredPosts} />
            )}

            {filteredPosts.length === 0 && (
                <p>Não existem posts</p>
            )}
        </section>
    )

}

export default Home;
