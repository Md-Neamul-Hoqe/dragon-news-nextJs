export const getCategoryNews = async (category) => {
    console.log(category);
    const res = await fetch(`https://the-news-portal-server.vercel.app/news?category=${category}`, {
        cache: 'no-store'
    })
    // console.log(await res.json());
    return res.json();
}