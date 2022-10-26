import React, { useState } from 'react';
import Luffy from '../84463.jpg';
import Popup from './popup';

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
    <div className="app--container">
      <header className="app--header">
        <button onClick={() => setPopup(true)}>Open popup</button>
      </header>

      <main className="app--main-container">
        <section className="app--left-sidebar">
          <h1>Some Title</h1>

          <div className="app--nav-btn-wrapper">
            <p
              className="app--nav-btn animate-pulse"
              style={{
                backgroundColor: 'rgb(239 68 68)',
                borderColor: 'rgb(185 28 28)',
              }}
            >
              Option One
            </p>
            <p
              className="app--nav-btn animate-bounce"
              style={{
                backgroundColor: 'rgb(236 72 153)',
                borderColor: 'rgb(190 24 93)',
              }}
            >
              Option One
            </p>
            <p
              className="app--nav-btn"
              style={{
                backgroundColor: 'rgb(249 115 22)',
                borderColor: 'rgb(194 65 12)',
              }}
            >
              Option One
            </p>
          </div>
        </section>

        <section className="app--content-container">
          {/* Jumbotron */}
          <div className="app--jumbotron">
            <div className="app--jumbotron-content">
              <p>{text}</p>
              <div>
                <img src={Luffy} style={{ borderRadius: '100%' }} />
              </div>
            </div>

            <button className="app--jumbotron-btn">Join Now</button>
          </div>

          <div className="app--grid">
            {GRID_DATA.map((data) => (
              <div className="app--grid-item">
                <div>
                  <img src={data.img} />
                </div>
                <h1>{data.title}</h1>
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
