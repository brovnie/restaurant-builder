import React from 'react';

export const Sidebar = () => {
  return (
    <div className="border border-red-500 min-w-52">
      <div className="flex flex-col gap-6 items-center justify-center px-5 py-3">
        <p className="text-xl">Table</p>
        <form className="flex flex-col gap-4">
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
      </div>
    </div>
  );
};
