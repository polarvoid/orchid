import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Orchid</a>
      </div>
      <div className="flex-none">
        <label className="btn drawer-button lg:hidden" htmlFor="sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </label>
        <ul>
          <li>
            <Link href="/app" className="btn btn-ghost normal-case">Home</Link>
            <Link href="https://github.com/polarvoid/orchid" className="btn btn-ghost normal-case">Github</Link>
            <Link href="/team" className="btn btn-ghost normal-case">Team</Link>
          </li>
        </ul>
      </div>
      <div className="grow"></div>
    </div>
  );
}
