"use client";
/* eslint-disable @next/next/no-img-element */
import Main from "./components/Main.jsx";
import WALLSPAPERS from "./libs/wallpapers.js";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Main />

      <section className="flex flex-col justify-between items-center w-full gap-y-10 border-b-2 border-t-2 border-[#cd9df8] bg-[#7a2cbfd3] pt-8 pb-12">
        <p
          onClick={() => router.push("/pages/wallpapers")}
          className="text-4xl font-semibold text-white text-start w-10/12 cursor-pointer"
        >
          Wallpapers
        </p>
        <ul className="flex flex-row flex-wrap w-10/12 h-full items-center justify-between gap-x-6 ">
          {WALLSPAPERS.filter(wall => wall.id < 4).map(wall => (
            <li
              onClick={() => router.push(`/pages/wallpapers/${wall.id}`)}
              key={wall.id}
              className="w-1/5 h-56"
            >
              <img
                src={wall.url}
                alt={wall.title}
                className="w-full h-full duration-200 rounded brightness-75 hover:brightness-100 cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
