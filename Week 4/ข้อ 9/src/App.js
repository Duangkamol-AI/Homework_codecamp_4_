import React from 'react';
import './App.css';
import Popup from "reactjs-popup";


export default () => (
  <Popup trigger={<button className="button"> This Is Important </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> This Is Important </div>
        <div className="content">
          {" "}
          Here is some important text or error or something.
          <hr></hr>
        </div>
        <u></u>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close
          </button>
        </div>
      </div>
    )}
  </Popup>
);