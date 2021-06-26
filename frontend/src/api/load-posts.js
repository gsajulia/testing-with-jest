export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts] = await Promise.all([postsResponse]);

    const postsJson = await posts.json();
    const photosJson = await (await photosResponse).json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })

    return postsAndPhotos;
}