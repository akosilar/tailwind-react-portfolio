export default function Footer() {
  return (
    <div
      className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 id="hire" className="secondary-title">Hire me</h2>
        <p className="section-paragraph">
          Feel free to to contact me any time, through any method below.
        </p>
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <form name="contact" netlify>
            <div className="space-y-12">
              <div>
                <label className="text-white block mb-6 text-xl font-bold"
                >Name</label
                >
                <input
                  className="w-full border border-input-border bg-input px-4 py-4"
                  name="contactName"
                />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold"
                >Email</label
                >
                <input
                  type="email"
                  className="w-full border border-input-border bg-input px-4 py-4"
                  name="contactEmail"
                />
              </div>
              <div>
                <label className="text-white block mb-6 text-xl font-bold"
                >Message</label
                >
                <textarea
                  type="email"
                  className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                  name="contactMessage"
                ></textarea>
              </div>
              <button className="px-6 py-2 bg-theme text-white font-bold">Submit</button>
            </div>
          </form>
          <div className="mt-12">
            {/*<!-- Contact info -->
            <p className="text-secondary">555-555-1234</p>
            <a
              href="mailto:email@mydomain.com"
              className="text-secondary underline mt-3 block"
            >email@mydomain.com</a
            >*/}
            {/*            <!-- Socials -->
*/}
            <div className="flex mt-20 space-x-6">
              {/*
                             <!-- Skype -->

              */}
              <a href="https://www.linkedin.com/in/janlarsaustero" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-12 lg:h-12" width="50" height="50" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="white" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section >
    </div >

  )
}
