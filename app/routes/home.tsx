import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GuiMelo" },
    { name: "description", content: "GuiMelo" },
    { name: "keywords", content: "GuiMelo" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>guimelo</h1>
    </>
  );
}
