export default function WorkCard({ job }) {
  const skills = job.skills.map((skill) => <div key={skill} className="badge">{skill}</div>)

  return (
    <>
      {/*<!-- Clients -->*/}
      < div className="space-y-12 my-16" >
        <div
          className="w-full border border-nav p-16 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap"
        >
          {/*<!-- Client logo -->*/}
          <div className="lg:m-auto mb-6">
            <img src={job.logo} />
          </div>

          {/*<!-- Client info -->*/}
          <div
            className="flex flex-wrap justify-center text-center lg:text-left lg:block"
          >
            <h3 className="text-white text-3xl font-semibold"> {job.companyName}</h3>
            <div
              className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8"
            >
              {skills}
            </div>

            <p className="text-secondary">
              {job.desc}
            </p>
          </div>
        </div>
      </div >
    </>
  )
}
