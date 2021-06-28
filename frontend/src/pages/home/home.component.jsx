import { useEffect, useState, useCallback } from 'react';

/* Styles */
import './home.styles.css';

/* Components */
import { Posts } from '../../components/posts/posts.component';
import { Input } from '../../components/input/input.component';
import { Button } from '../../components/button/button.component';

/* Api */
import { loadPosts } from './../../api/load-posts';

export const Home = () => {
    const maxPagePosts = 10;
    const houseOptions = ["gryffindor", "ravenclaw", "slytherin", "hufflepuff"];
    const [house, setHouse] = useState("gryffindor");
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

    const handleChangeHouse = (house) => {
        setHouse(house);
    }

    const handleLoadPosts = useCallback(async (house) => {
        const postsAndPhotos = await loadPosts(house);

        setPosts(postsAndPhotos.slice(0, maxPagePosts));
        setAllPosts(postsAndPhotos);
    }, [])

    useEffect(() => {
        handleLoadPosts(house);
    }, [handleLoadPosts, house]);

    return (
        <>
            <header className="header">
                <h2 className="main-title"> Escolha a casa </h2>
                <div className="button-container">
                    {houseOptions.map((elem, index) => (
                        <Button key={index} buttonValue={elem} handleChange={handleChangeHouse}/>
                    ))}
                </div>
            </header>
            <section className="container">
            <h1 className="house-title"> {house[0].toUpperCase() + house.substr(1)} </h1>
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
        </>
    )

}

export default Home;
