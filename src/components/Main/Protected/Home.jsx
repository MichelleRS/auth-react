import { useEffect } from "react";

export default function Home() {
  // set document title
  useEffect(() => {
    document.title = "React Auth Template - Home";
  }, []);

  return (
    <main>
      <h1>Home page!!</h1>
    </main>
  );
}
