import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[10px] tracking-widest3 uppercase text-brand-warm/30 mb-4">
        404
      </p>
      <h1 className="font-display text-[clamp(4rem,10vw,8rem)] italic text-brand-cream leading-none mb-8">
        Lost in the void.
      </h1>
      <Link
        href="/"
        className="font-body text-xs tracking-widest2 uppercase border border-brand-border px-10 py-4 text-brand-accent hover:bg-brand-accent hover:text-brand-bg transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
