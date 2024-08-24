import React from 'react';

export const Sidebar = () => {
  return (
    <div className="row-span-5 border border-red-500 min-w-52">
      <div className="flex flex-row gap-6 items-center justify-center px-5 py-3">
        <p className="text-xl">Add table</p>
        <input
          type="number"
          min="0"
          max="10"
          placeholder="0"
          className="w-10 text-center border border-slate-500 rounded"
        />
      </div>
    </div>
  );
};
