import React, { useState } from 'react';
import Popup from './popup';
import Luffy from '../84463.jpg';

const GRID_DATA = [
  {
    title: 'Super Duper Title',
    img: Luffy,
  },
  {
    title: 'Super Duper Title 2',
    img: Luffy,
  },
  {
    title: 'Super Duper Title 3',
    img: Luffy,
  },
  {
    title: 'Super Duper Title 4',
    img: Luffy,
  },
  {
    title: 'Super Duper Title 5',
    img: Luffy,
  },
];

export default function App() {
  const [popup, setPopup] = useState(false);

  return (
    <div className="h-screen">
      <header className="flex items-center justify-start h-24 shadow-md bg-stone-400">
        <button
          className="px-2 py-1 ml-10 font-bold text-white bg-purple-500 rounded-md"
          onClick={() => setPopup(true)}
        >
          Open Popup
        </button>
      </header>

      <main className="flex h-full">
        <section className="flex flex-col items-center w-48 h-full bg-red-200 shadow-md shrink-0">
          <h1 className="text-xl font-bold leading-7 my-14">Some title</h1>

          <div className="flex flex-col space-y-6 text-white">
            <p className="bg-red-500 border-red-700 nav-btn animate-pulse">
              Option One
            </p>
            <p className="bg-pink-500 border-pink-700 nav-btn animate-bounce">
              Option One
            </p>
            <p className="bg-orange-500 border-orange-700 nav-btn">
              Option One
            </p>
          </div>
        </section>

        <section className="m-4">
          {/* Jumbotron */}
          <div className="flex flex-col justify-center p-2 border-2 rounded-md shadow-lg border-green-500/10 drop-shadow-lg">
            <div className="flex items-center justify-evenly">
              <p>{text}</p>
              <div className="hidden w-40 h-40 shrink-0 md:inline">
                <img src={Luffy} className="w-full h-full rounded-full" />
              </div>
            </div>

            <button className="block mt-10 font-bold text-white rounded-md drop-shadow-2xl bg-green-500/80">
              Join Now
            </button>
          </div>

          {/* Grid Data */}
          <div className="grid grid-cols-1 gap-4 mt-20 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {GRID_DATA.map((data) => (
              <div className="border border-black shadow-lg w-fit hover:scale-110 cursor-crosshair">
                <div className="w-48 h-48">
                  <img src={data.img} className="w-full h-full" />
                </div>
                <h1 className="py-2 font-bold text-center">{data.title}</h1>
              </div>
            ))}
          </div>
        </section>
      </main>

      {popup && <Popup close={() => setPopup(false)} />}
    </div>
  );
}

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
