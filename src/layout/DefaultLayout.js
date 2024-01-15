import { Outlet } from 'react-router-dom';
import Appbar from '../components/Appbar';

export default function DefaultLayout() {
  return (
    <div>
      <header>
        <Appbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
