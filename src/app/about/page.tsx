export const revalidate = false; // Static at build time

export default function AboutPage() {
  console.log("About page rendered at BUILD time");

  return (
    <main>
      <h1>About Us</h1>
      <p>This page is statically generated.</p>
    </main>
  );
}
