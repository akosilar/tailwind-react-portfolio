import WorkCard from "./WorkCard"

export default function Work({ job }) {
  return (
    <div
      className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 id="work" className="secondary-title">Experience</h2>
        <p className="section-paragraph">
          I’ve had the pleasure of working with multiple Fortune 500 companies,
          designing and implementing both frontend and backend.
        </p>
        <WorkCard job={job} />
      </section>
    </div>

  )
}


