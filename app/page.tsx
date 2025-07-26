"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const [containers, setContainers] = useState([])

  useEffect(() => {
    fetch("/api/containers")
      .then(res => res.json())
      .then(setContainers)
  }, [])

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Elo 3</h1>

      <div>
        {JSON.stringify(containers[0])}
      </div>
    </div>
  );
}
