import { useState } from 'react';
import { Sidebar } from './components/Sidebar';

function App() {
  const [tables, setTables] = useState<number[]>([]);
  const getNewTable = (seats: number) => {
    setTables([...tables, seats]);
  };
  console.log(tables);

  return (
    <div className="flex gap-4 h-screen">
      <Sidebar setTable={getNewTable} clearTables={() => setTables([])} />
      <div className="border border-slate-500 w-full">
        {tables.map((item) => (
          <div>test</div>
        ))}
      </div>
    </div>
  );
}

export default App;
