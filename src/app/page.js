'use client'

import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();
  return (
    <>
      <img src="/images/nkar.jpeg" />
    <button onClick={() => router.push("/contact")}>Click me </button>
  
    </>
  );
}
