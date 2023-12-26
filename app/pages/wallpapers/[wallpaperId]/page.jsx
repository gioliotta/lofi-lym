/* eslint-disable @next/next/no-img-element */
"use client";
import { useParams } from "next/navigation";
import WALLSPAPERS from "../../../libs/wallpapers";

function WallpaperId() {
  const { wallpaperId } = useParams(),
    wallpaper = WALLSPAPERS.find(wall => wall.id == wallpaperId);

  return (
    <article className="py-6 border-2 bg-[#7a2cbfd3] border-[#cd9df8] rounded w-10/12 h-[60vh] flex flex-col justify-center items-center gap-y-6">
      <p className="text-4xl text-red-200 w-6/12">
        {wallpaper.title + " - 1920x1080"}
      </p>
      <img
        src={wallpaper.url}
        alt={wallpaper.title}
        className="w-6/12 h-[40vh]"
      />
      <div className="w-6/12 flex flex-row justify-start items-center gap-x-4">
        <button className="bg-[#62ac35] hover:scale-105 duration-150 border-2 border-[#88ff8c] px-4 py-2 h-12 rounded-lg text-md font-semibold">
          Download
        </button>
        <button className="bg-[#41c2c0] hover:scale-105 duration-150 border-2 border-[#9cebff] px-4 py-2 h-12 rounded-lg text-md font-semibold">
          Save
        </button>
      </div>
    </article>
  );
}

export default WallpaperId;
