import React from 'react';

export default function Popup({ close }) {
  return (
    <div className="popup--wrapper" role="dialog">
      <div className="popup--pad"></div>

      <div className="popup--window">
        <div className="popup--content-wrapper">
          <div className="popup--content">
            <div className="popup--main-wrapper">
              <div className="popup--main-sm">
                <div className="popup--main-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>

                <div className="popup--main-data">
                  <h3>Example Title</h3>
                  <div className="popup--main-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="popup--footer">
              <button className="popup--btn btn-danger" onClick={close}>
                Delete
              </button>
              <button className="popup--btn btn-secondary" onClick={close}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
