import React, { ChangeEvent } from 'react';

type Props = {
  setTable: (seats: number) => void;
  clearTables: () => void;
};

export const Sidebar = (props: Props) => {
  const addTable = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const seats = formData.get('seats');
    e.target.reset();
    props.setTable(Number(seats));
  };
  const deleteAllTables = () => {
    props.clearTables();
  };
  return (
    <div className="border border-red-500 min-w-52">
      <div className="flex flex-col gap-6 items-center justify-center px-5 py-3">
        <p className="text-xl">Table</p>
        <form className="flex flex-col gap-4" onSubmit={addTable}>
          <div className="flex flex-row gap-4">
            <label htmlFor="seats">Seats</label>
            <input
              name="seats"
              type="number"
              min="0"
              max="10"
              placeholder="0"
              className="w-10 text-center border border-slate-500 rounded"
            />
          </div>
          <button
            type="submit"
            className="border border-green-500 bg-green-400 text-white px-3 py-2 rounded"
          >
            Add table
          </button>
        </form>
        <button
          type="button"
          className="border border-red-500 bg-red-400 text-white px-3 py-2 rounded"
          onClick={deleteAllTables}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
