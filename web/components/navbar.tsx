export default function Navbar({className} : {className : string}) {
  return (
    <nav className={className}>
      <div className="flex items-center space-x-4 h-full">
        <a href="/" className="text-2xl font-bold">ETHSight</a>
        {/* <a href="/about" className="hover:underline">About</a> */}
      </div>
      <div className="flex items-center space-x-4 h-full">
        <w3m-button />
      </div>
    </nav>
  );
}