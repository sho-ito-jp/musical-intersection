import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-24 font-sans selection:bg-white selection:text-black">
      {/* メインコピー */}
      <section className="max-w-4xl mx-auto mb-32 mt-20">
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-12 italic">
          それは、無数の音がすれ違い、<br />
          やがてひとつの「創作」へと重なっていく場所。
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
          音楽的交差点は、ジャンルや形の境界を越え、<br />
          表現者が混ざり合うことで生まれる未知の響きを追求するクリエイティブ・プロジェクトです。
        </p>
      </section>

      {/* SNSリンク */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-800 pt-16">
        <div>
          <h2 className="text-sm font-bold tracking-[0.3em] text-gray-500 mb-8">SOCIALS</h2>
          <ul className="space-y-6 text-2xl font-bold">
            <li>
              <a href="https://x.com/intersection09" target="_blank" className="hover:text-blue-400 transition-colors">Twitter @intersection09</a>
            </li>
            <li>
              <a href="https://www.instagram.com/musical.intersection" target="_blank" className="hover:text-pink-500 transition-colors">Instagram</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-sm font-bold tracking-[0.3em] text-gray-500 mb-8">CHANNELS</h2>
          <ul className="space-y-6 text-2xl font-bold">
            <li>
              <a href="https://www.youtube.com/channel/UCuyVnMCk2SOAdz_pMPVXvEg" target="_blank" className="hover:text-red-600 transition-colors">Main YouTube</a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCI7NskBnudXIaX2CMDdbVfw/" target="_blank" className="hover:text-red-400 transition-colors">Event YouTube</a>
            </li>
          </ul>
        </div>
      </section>

      <div className="max-w-4xl mx-auto mt-32">
        <Link href="/" className="text-sm font-black border border-white px-6 py-3 hover:bg-white hover:text-black transition-all">
          ← BACK TO HOME
        </Link>
      </div>
    </main>
  )
}