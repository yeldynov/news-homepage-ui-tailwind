import BottomBar from './components/BottomBar';
import FrontNews from './components/FrontNews';
import NavBar from './components/Navbar';
import SideBar from './components/SideBar';

function App() {
  return (
    <main className='min-h-screen flex flex-col items-center gap-10 desk:m-0 m-5'>
      <div className='desk:max-w-6xl'>
        <NavBar />
        <div className='flex desk:flex-row flex-col gap-10'>
          <FrontNews />
          <SideBar />
        </div>
        <div>
          <BottomBar />
        </div>
      </div>
    </main>
  );
}

export default App;
