export default function Sidenav() {
  return (
    <nav
      className="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block"
    >
      <div
        className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36"
      >
        <a
          href="#"
          className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body"
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
          >Home</span
          >
        </a>
        <a
          href="#work"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
          >Experience</span
          >
        </a>
        {/*<a
              href="#projects"
              className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
            >
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
              >Projects</span
              >
            </a>*/}
        <a
          href="#hire"
          className="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body"
        >
          <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0"
          >Hire</span
          >
        </a>
      </div>
    </nav>
  )
}
