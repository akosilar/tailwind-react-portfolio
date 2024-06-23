import WorkCard from "./WorkCard"

export default function Work({ jobs }) {
  return (
    <div
      className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 id="work" className="secondary-title">Experience</h2>
        {jobs.map(job =>
          <WorkCard
            key={job.companyName}
            job={job} />
        )}
      </section>
    </div>

  )
}


