import { useState } from "react";

// public/me.jpg ga o'z rasmingizni qo'ying. Bo'lmasa "J" harfi ko'rinadi.
export default function Avatar({ className = "" }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`rounded-full bg-linear-to-br from-accent to-sky-400 flex items-center justify-center text-white font-bold overflow-hidden ${className}`}>
      {ok ? <img src="/me.jpg" alt="Jo'rabek" onError={() => setOk(false)} className="w-full h-full object-cover" /> : "J"}
    </div>
  );
}
