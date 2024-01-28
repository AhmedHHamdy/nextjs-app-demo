'use client'

import Image from "next/image";
import Link from "next/link";
import Courses from "./components/Courses";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome To Traversy media</h1>
      <Courses />
    </div>
  );
}
