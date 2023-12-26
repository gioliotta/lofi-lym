import Link from "next/link";

function Header() {
  return (
    <header className="mb-16 border-[#cd9df8] border-2 bg-[#7a2cbfd3] flex flex-row items-center justify-around w-10/12 h-20 px-4 rounded">
      <h1 className="text-start text-3xl w-2/6 text-white font-bold">
        <Link href="/">Lofi Lym</Link>
      </h1>
      <nav className="flex flex-row items-center justify-center w-4/6">
        <ul className="flex flex-row items-center justify-end gap-x-14 w-full text-white text-2xl">
          <Link href="/">Home</Link>
          <Link href="/">Songs</Link>
          <Link href="/pages/wallpapers">Wallpapers</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
