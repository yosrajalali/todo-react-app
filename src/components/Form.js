import React, { useState } from 'react';
import { TiThSmall } from 'react-icons/ti';

function Form({ todo, change, submit, error }) {
  return (
    <form onSubmit={submit} className="add-todo">
      <div className="form-container">
        <input value={todo} onChange={change} type="text" />
        <button type="submit"> Add a Todo </button>
      </div>

      {error && <small>{error}</small>}
    </form>
  );
}

export default Form;
