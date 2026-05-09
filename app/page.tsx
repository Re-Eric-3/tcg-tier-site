import TierCard from '@/components/TierCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-red-500 mb-10">
        UNION ARENA Tier
      </h1>

      <div className="grid md:grid-cols-3 gap-5">
        <TierCard
          title="緑ゴン"
          tier="S Tier"
        />

        <TierCard
          title="紫宿儺"
          tier="A Tier"
        />
      </div>
    </main>
  )
}