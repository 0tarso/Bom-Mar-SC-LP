import type { ReactNode } from "react";

export function ButtonGlass({ children }: { children: ReactNode }) {
  return (
    <button
      className="
        w-full
        max-sm:w-[320px]
        backdrop-blur-md
        bg-white/20 text-white
        border border-white/30
        px-5 py-3 rounded-2xl
        shadow-lg
        hover:bg-white/30
        hover:scale-[1.02]
        active:scale-100
        active:bg-white/20
        cursor-pointer
        transition-all duration-200
      "
    >
      {children}
    </button>
  );
}
