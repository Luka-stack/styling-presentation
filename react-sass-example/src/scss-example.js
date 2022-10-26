import React from 'react';
import './scss-example.scss';

export default function ScssExample() {
  return (
    <main className="SCSS">
      <div>
        <button className="btn btn-primary">Sign In Button</button>
      </div>

      <div>
        <button className="btn btn-secondary">Sign Out Button</button>
        <button disabled className="btn btn-secondary important">
          Sign Out Button Disabled Important
        </button>
      </div>

      <div>
        <button className="btn important">Normal Button</button>
        <button disabled className="btn important">
          Disabled Button
        </button>
      </div>

      <div>
        <button className="btn btn-ugly">
          Ugly Button
          <i>Some Icon</i>
        </button>
      </div>
    </main>
  );
}
