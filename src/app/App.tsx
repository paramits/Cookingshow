import { RouterProvider } from 'react-router';
import { router } from './routes';
import { GameProvider } from './context/GameContext';
import { BACKDROP_SRC, GAME_HEIGHT, GAME_WIDTH } from './backdrop';

export default function App() {
  return (
    <GameProvider>
      <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <div
          className="relative shrink-0 overflow-hidden"
          style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        >
          <img
            alt=""
            src={BACKDROP_SRC}
            className="pointer-events-none absolute inset-0 z-0 size-full object-cover object-center"
            aria-hidden
          />
          <div className="relative z-10 size-full">
            <RouterProvider router={router} />
          </div>
        </div>
      </div>
    </GameProvider>
  );
}