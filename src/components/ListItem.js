import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { VscRefresh } from 'react-icons/vsc';

function ListItem({ delHandler, doneHandler, title, id, done }) {
  return (
    <div className={`list ${done ? 'bg-success' : ''}`}>
      <div className="btns">
        <button
          className="green-btn"
          onClick={() => {
            doneHandler(id);
          }}
        >
          {done ? <VscRefresh /> : <TiTick />}
        </button>
        <button
          className="red-btn"
          onClick={() => {
            delHandler(id);
          }}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
      {done ? <del className="line-through">{title}</del> : <del>{title}</del>}
    </div>
  );
}

export default ListItem;
