const ChampionCard = ({ champion }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-950">
        <img
          src={champion.image}
          alt={champion.name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <h3 className="absolute bottom-3 left-4 text-2xl font-bold text-white">
          {champion.name}
        </h3>
      </div>

      <div className="p-4 text-sm text-slate-300 space-y-2">
        <div className="flex justify-between border-b border-slate-800 pb-1">
          <span className="text-slate-500">เมือง:</span>
          <span className="font-semibold text-amber-400">{champion.region}</span>
        </div>
        <div className="flex justify-between border-b border-slate-800 pb-1">
          <span className="text-slate-500">ปีที่ปล่อย:</span>
          <span className="font-semibold text-cyan-400">{champion.releaseYear}</span>
        </div>
        <div className="flex justify-between border-b border-slate-800 pb-1">
          <span className="text-slate-500">เพศ:</span>
          <span className="font-semibold text-emerald-400">{champion.gender}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">ชนเผ่า:</span>
          <span className="font-semibold text-purple-400">{champion.race}</span>
        </div>
      </div>
    </div>
  )
}
export default ChampionCard