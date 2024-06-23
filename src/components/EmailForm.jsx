export default function EmailForm() {
  return (
    <form name="contact" method="post" netlify netlify-honeypot="bot-field">
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
        <input type="hidden" name="form-name" value="contact" />
        <button type="submit" className="px-6 py-2 bg-theme text-white font-bold">Submit</button>
      </div>
    </form>

  )
}
