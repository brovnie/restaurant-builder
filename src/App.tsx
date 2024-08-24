import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 h-screen">
      <Sidebar />
      <div className="col-span-4 row-span-5"></div>
    </div>
  );
}

export default App;
