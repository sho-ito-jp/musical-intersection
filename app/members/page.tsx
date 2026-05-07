import Link from 'next/link'

const members = [
  { id: 'amagiri-yoha', name: '雨霧夜羽', role: 'Producer' },
  { id: 'kasai-ui', name: '葛西憂 / Tekkempop!!!', role: 'Artist' },
  { id: 'ki-i-i-i', name: 'Kii!i!i!i / d.j.k.i.c.', role: 'Artist' },
  { id: 'octop', name: 'OctoP', role: 'Artist' },
  { id: 'zounofun', name: 'ゾウノフン', role: 'Artist' },
  { id: 'kaneko', name: 'かねこ', role: 'Artist' },
  { id: 'erika', name: 'エリカ', role: 'Artist' },
  { id: 'sho-ito', name: '伊藤翔', role: 'Artist' },
]

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-white text-black p-8 md:p-16 font-sans">
      <h1 className="text-5xl font-black mb-12 border-b-8 border-black pb-4 inline-block tracking-tighter italic">
        MEMBERS
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {members.map((member) => (
          <Link 
            href={`/members/${member.id}`} 
            key={member.id} 
            className="group border-4 border-black p-6 hover:bg-black hover:text-white transition-all duration-200 flex flex-col justify-between h-48"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-gray-400 mb-2 font-bold">{member.role}</p>
              <h2 className="text-2xl font-black leading-tight">{member.name}</h2>
            </div>
            <p className="text-right text-sm font-black opacity-0 group-hover:opacity-100 transition-opacity">VIEW →</p>
          </Link>
        ))}
      </div>

      <div className="mt-20">
        <Link href="/" className="text-lg font-black border-b-4 border-black hover:bg-black hover:text-white px-2 py-1 transition-all">
          ← BACK TO HOME
        </Link>
      </div>
    </main>
  )
}