import React from 'react'
import { ViewMemory } from "../viewMemory/viewMemory";
import type { Route } from "./+types/memory";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Memory" },
    { name: "Memory" },
  ];
}

export default function Memory() {
  return <ViewMemory/>;
}
