import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="flex gap-4 h-screen">
      <Sidebar />
      <div className="border border-slate-500 w-full"></div>
    </div>
  );
}

export default App;
