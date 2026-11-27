import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";
import { btnAccent, btnOutline, container } from "./ui";

/** [open, close, high, low] as y-positions: smaller y means a higher price. Illustration only. */
const candles: [number, number, number, number][] = [
  [150, 135, 158, 128], [135, 120, 142, 112], [120, 128, 134, 110], [128, 108, 132, 100],
  [108, 96, 114, 90], [96, 104, 110, 88], [104, 84, 108, 78], [84, 70, 90, 64],
  [70, 78, 84, 60], [78, 58, 82, 52], [58, 48, 62, 40], [48, 56, 60, 38],
];

function CandleChart() {
  return (
    <svg viewBox="0 0 360 180" role="img" aria-label="Illustration of a rising candlestick chart" className="h-auto w-full">
      {candles.map(([open, close, high, low], i) => {
        const x = 18 + i * 28;
        const up = close < open;
        const colour = up ? "#0f5c63" : "#e39b1b";
        return (
          <g key={i}>
            <line x1={x + 7} x2={x + 7} y1={high} y2={low} stroke={colour} strokeWidth="2" />
            <rect x={x} y={Math.min(open, close)} width="14" height={Math.max(Math.abs(open - close), 2)} rx="2" fill={colour} />
          </g>
        );
      })}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={`${container} grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_1fr]`}>
      <div>
        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Learn to trade the stock market in a real classroom.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Offline courses in market basics, technical analysis and options trading, with guided practice in live market
          hours. Start with a free demo class and see if it is right for you.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/#demo" className={btnAccent}>Book a free demo class</Link>
          <a href={site.syllabusFile} download className={btnOutline}>Download syllabus (PDF)</a>
        </div>
        <p className="mt-4 text-sm text-muted">
          Questions about batch timings?{" "}
          <a className="font-semibold text-brand underline" href={whatsappHref("Hello, I would like to know the current batch timings.")}>
            Ask on WhatsApp
          </a>
        </p>
      </div>
      <div className="rounded-2xl border border-line bg-white p-6">
        <CandleChart />
        <p className="mt-1 text-xs text-muted">Illustration only. Not a real price chart and not a trading signal.</p>
        <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
          <li>Meet your mentor and ask your questions</li>
          <li>See how a classroom session is taught</li>
          <li>Get a course and batch suggestion, with no obligation</li>
        </ul>
      </div>
    </section>
  );
}
