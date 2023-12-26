/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import SONGS from "../libs/playlists.js";
import { twMerge } from "tailwind-merge";
import { LoveEmptySVG, LoveSVG } from "../svgs.jsx";
import { useZustand } from "../libs/zustand.js";
function Main() {
  const { favorites, addFavorite, removeFavorite } = useZustand(),
    [songData, setSongData] = useState({});

  useEffect(() => randomVideo(), []);

  useEffect(() => console.log(favorites), [favorites]);

  function changeSong(song) {
    const newSong = {
      id: song.id,
      title: song.title,
      url: song.url,
    };
    setSongData(newSong);
  }

  function randomVideo() {
    const index = Math.floor(Math.random() * SONGS.length),
      newSong = {
        id: SONGS[index].id,
        title: SONGS[index].title,
        url: SONGS[index].url,
      };
    setSongData(newSong);
  }

  return (
    <>
      <main className="w-10/12 h-[60vh] flex flex-row justify-between items-center gap-x-2">
        <iframe
          title={songData.title}
          src={`https://www.youtube.com/embed/${songData.url}`}
          className="aspect-video w-6/12"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <div className="border-2 bg-[#7a2cbfd3] border-[#cd9df8] rounded aspect-video pl-4 py-4 w-6/12 flex flex-col justify-between items-start gap-y-4">
          <p className="text-white">
            <b className="text-4xl">Lofi chill music</b>
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            architecto facilis incidunt.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            architecto facilis incidunt pol mar arny deu lim fopoxol.
          </p>
          <div className="flex flex-row justify-start items-center w-full gap-x-4 text-white">
            <button
              onClick={randomVideo}
              className="bg-[#7b2cbf] hover:scale-105 duration-150 border-2 border-[#cd9df8] px-4 py-2 h-12 rounded-lg text-md font-semibold"
            >
              Random Lofi
            </button>
            <button className="bg-[#7b2cbf]  hover:scale-105 duration-150 border-2 border-[#cd9df8]  px-4 py-2 h-12 rounded-lg text-md font-semibold">
              Playlists
            </button>
            <button className="bg-[#7b2cbf] hover:scale-105 duration-150 border-2 border-[#cd9df8]  px-4 py-2 h-12 rounded-lg text-md font-semibold">
              Dinamyc Mode
            </button>
          </div>
        </div>
      </main>

      <section className="flex flex-row justify-between items-start w-10/12">
        <ul className="mb-12 bg-[#7a2cbfd3] border-2 border-[#cd9df8] flex flex-col justify-start items-start rounded gap-y-4 py-4 px-6 w-5/12">
          <p className="text-white text-2xl font-semibold">Playlist</p>
          {SONGS.map(song => (
            <li
              key={song.id}
              onClick={() => changeSong(song)}
              className={twMerge(
                songData.id == song.id
                  ? "bg-[#ac77db] text-black font-semibold"
                  : "bg-[#7b2cbf] text-white",
                "duration-150 hover:bg-[#ac77db] cursor-pointer border-2 border-[#cd9df8] rounded w-full py-2 px-4 flex flex-row justify-between items-center"
              )}
            >
              <p>
                {songData.id == song.id
                  ? song.title + " - listening 🎶"
                  : song.title}
              </p>

              {SONGS.includes(song.id) ? (
                <LoveSVG
                  key={song.id}
                  onClick={event => {
                    event.stopPropagation();
                    removeFavorite(song.id);
                  }}
                />
              ) : (
                <LoveEmptySVG
                  key={song.id}
                  onClick={event => {
                    event.stopPropagation();
                    addFavorite(song);
                  }}
                />
              )}
            </li>
          ))}
        </ul>

        <ul className="mb-12 bg-[#7a2cbfd3] border-2 border-[#cd9df8] flex flex-col justify-start items-start rounded gap-y-4 py-4 px-6 w-5/12">
          <p className="text-white text-2xl font-semibold">Favorites</p>
          {favorites.map(song => (
            <li
              key={song.id}
              onClick={() => changeSong(song)}
              className={twMerge(
                favorites.id == song.id
                  ? "bg-[#ac77db] text-black font-semibold"
                  : "bg-[#7b2cbf] text-white",
                "duration-150 hover:bg-[#ac77db] cursor-pointer border-2 border-[#cd9df8] rounded w-full py-2 px-4 flex flex-row justify-between items-center"
              )}
            >
              <p>
                {favorites.id == song.id
                  ? song.title + " - listening 🎶"
                  : song.title}
              </p>

              <LoveSVG
                onClick={event => {
                  event.stopPropagation();
                  removeFavorite(song);
                }}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Main;
