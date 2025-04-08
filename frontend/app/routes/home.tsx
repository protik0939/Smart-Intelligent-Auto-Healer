import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Smart Intelligent Auto Healer" },
    { name: "Smart Intelligent Auto Healer" },
  ];
}

export default function Home() {
  return <Welcome />;
}
