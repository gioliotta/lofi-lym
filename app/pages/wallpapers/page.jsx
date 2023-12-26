"use client";
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import WALLSPAPERS from "../../libs/wallpapers.js";

export default function Wallpapers() {
  const router = useRouter();

  return (
    // <div className="flex flex-col w-10/12 items-center justify-center">
    <ul className="flex flex-row flex-wrap w-10/12 h-full items-center justify-between gap-y-20">
      {WALLSPAPERS.map(wallpaper => (
        <li
          onClick={() => router.push(`/pages/wallpapers/${wallpaper.id}`)}
          key={wallpaper.id}
          className="w-2/5 h-80"
        >
          <img
            src={wallpaper.url}
            alt={wallpaper.title}
            className="w-full h-full duration-200 rounded brightness-90 hover:brightness-100 cursor-pointer"
          />
        </li>
      ))}
    </ul>
    // </div>
  );
}
