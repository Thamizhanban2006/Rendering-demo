export const revalidate = 60; // Rebuild every 60 seconds

async function getNews() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function NewsPage() {
  console.log("News page regenerated every 60 seconds");

  const news = await getNews();

  return (
    <main>
      <h1>Latest News</h1>
      {news.slice(0, 5).map((item: any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </main>
  );
}
