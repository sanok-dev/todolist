import Link from "next/link";



export default function HeaderTable() {
  return (
    <div className="flex px-4 justify-around gap-4">
      <Link href="/monday">
        <h1 className="text-2xl font-bold">月曜日</h1>
      </Link>
      <Link href="/tuesday">
        <h1 className="text-2xl font-bold">火曜日</h1>
      </Link>
      <Link href="/wednesday">
        <h1 className="text-2xl font-bold">水曜日</h1>
      </Link>
      <Link href="/thursday">
        <h1 className="text-2xl font-bold">木曜日</h1>
      </Link>
      <Link href="/friday">
        <h1 className="text-2xl font-bold">金曜日</h1>
      </Link>
    </div>
  )
}
