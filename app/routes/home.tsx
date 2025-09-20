import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "REST Countries - A React Router App" },
    { name: "description", content: "REST Countries API with color theme switcher" },
  ];
}

export default function Home() {
  return <Welcome />;
}
