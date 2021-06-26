export const loadPosts = async () => {
    const postsResponse = fetch('https://hp-api.herokuapp.com/api/characters/house/gryffindor');

    const [posts] = await Promise.all([postsResponse]);

    const postsJson = await posts.json();

    const postsAndPhotos = postsJson.map((post, index) => {
        return {
            id: index+1,
            title: `${post.name}`,
            body: `History: ${post.species} At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
            cover: post.image
        }
    })

    return postsAndPhotos;
}