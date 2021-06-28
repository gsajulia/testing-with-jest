export const loadPosts = async (house) => {

    const postsResponse = fetch(`https://hp-api.herokuapp.com/api/characters/house/${house}`);

    const [posts] = await Promise.all([postsResponse]);

    const postsJson = await posts.json();

    const postsAndPhotos = postsJson.map((post, index) => {
        return {
            id: index+1,
            title: `${post.name}`,
            body: `This character interpeted by ${post.actor} is a ${post.species} of ${post.house} house ${post.hogwartsStudent ? "studant at Hogwarts and" : ""} born at ${post.dateOfBirth} 
            ${post.gender === "female" ? "she" : "he"} is ${post.ancestry}, has ${post.eyeColour} eyes and ${post.hairColour} hair, ${post.gender === "female" ? "her" : "his"}
            patronus is a ${post.patronus} and ${post.gender === "female" ? "her" : "his"} wand core is ${post.wand.core} and is made with ${post.wand.wood} wood.`,
            cover: post.image
        }
    })

    return postsAndPhotos;
}