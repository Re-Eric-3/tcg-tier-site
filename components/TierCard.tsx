interface Props {
  title: string
  tier: string
}

export default function TierCard({
  title,
  tier,
}: Props) {
  return (
    <div className="bg-zinc-900 p-5 rounded-2xl">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-red-500 mt-2">
        {tier}
      </p>
    </div>
  )
}