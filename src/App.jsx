import { CHAMPIONS_DATA } from './data/championsData';
import ChampionCard from './components/ChampionCard';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-center text-amber-400 mb-8">
        LoL Champions
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CHAMPIONS_DATA.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};
export default App;
