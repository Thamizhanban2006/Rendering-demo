export const dynamic = "force-dynamic";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });
  return res.json();
}

export default async function DashboardPage() {
  console.log("Dashboard rendered at REQUEST time");

  const data = await getData();

  return (
    <main>
      <h1>User Dashboard</h1>
      <p>Live Data Title: {data.title}</p>
    </main>
  );
}
