import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Seats } from './components/Seats';

function App() {
  const [tables, setTables] = useState<number[]>([]);
  const getNewTable = (seats: number) => {
    setTables([...tables, seats]);
  };
  return (
    <div className="flex gap-4 h-screen">
      <Sidebar setTable={getNewTable} clearTables={() => setTables([])} />
      <div className="border border-slate-500 w-full">
        {tables.map((item, index) => (
          <div
            key={index}
            className="flex flex-col"
            style={{ width: 35 * Math.round(item / 2) }}
          >
            <Seats numberOfSeats={Math.round(item / 2)} />
            <div
              className="bg-red-500 min-h-8 my-1"
              style={{ width: 35 * Math.round(item / 2) }}
            >
              Table#{index}
            </div>
            <Seats numberOfSeats={item - Math.round(item / 2)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
