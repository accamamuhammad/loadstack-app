import Navbar from "./landing/navbar";
import Homepage from "./landing/homepage";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <Navbar />
      <Homepage />
    </main>
  );
}
