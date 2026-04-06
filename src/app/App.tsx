import { RouterProvider } from 'react-router';
import { router } from './routes';
import { GameProvider } from './context/GameContext';

export default function App() {
  return (
    <GameProvider>
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="w-[1300px] h-[750px] relative overflow-hidden">
          <RouterProvider router={router} />
        </div>
      </div>
    </GameProvider>
  );
}