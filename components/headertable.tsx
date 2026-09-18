import Link from "next/link";



export default function HeaderTable() {
  return (
    <div className="flex px-4 justify-around gap-4">
      <Link href="/today">
        <h1 className="text-2xl font-bold">今日</h1>
      </Link>
      <Link href="/tomorrow">
        <h1 className="text-2xl font-bold">明日</h1>
      </Link>
    </div>
  )
}
