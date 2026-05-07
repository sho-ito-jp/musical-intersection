import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black font-sans px-4">
      {/* メインタイトル：Manus.spaceのように大きく、力強く */}
      <h1 className="text-[12vw] font-black tracking-tighter leading-none uppercase text-center">
        音楽的<br />交差点
      </h1>
      
      {/* ナビゲーション */}
      <nav className="mt-12 flex gap-8 text-lg font-medium border-t border-black pt-4">
        <Link href="/about" className="hover:line-through transition">ABOUT</Link>
        <Link href="/members" className="hover:line-through transition">MEMBERS</Link>
        <Link href="/contact" className="hover:line-through transition">CONTACT</Link>
      </nav>

      <p className="absolute bottom-10 text-sm tracking-widest text-gray-400">
        EST. 2026 / SHAPING THE SOUND
      </p>
    </main>
  )
}