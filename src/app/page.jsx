import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Ai-Powered Prompts</span>
      </h1>
      <p className="desc text-center">Lorem</p>
      <br />
      <Feed />
    </section>
  );
}
