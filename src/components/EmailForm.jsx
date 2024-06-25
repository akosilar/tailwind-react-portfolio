import { useState } from "react"
export default function EmailForm() {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactMessage: ''
  });


  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      //.then(() => alert("Success!"))
      .then(() => console.log("form successfully submitted"))
      .catch(error => alert(error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { contactName, contactEmail, contactMessage } = formData;
  return (
    <form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div className="space-y-12">

        <div>
          <label className="text-white block mb-6 text-xl font-bold"
          >Name</label
          >
          <input
            className="w-full border border-input-border bg-input px-4 py-4"
            name="contactName"
            onChange={handleChange}
            value={contactName}
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
            onChange={handleChange}
            value={contactEmail}
          />
        </div>
        <div>
          <label className="text-white block mb-6 text-xl font-bold"
          >Message</label
          >
          <textarea
            className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
            name="contactMessage"
            onChange={handleChange}
            value={contactMessage}
          ></textarea>
        </div>
        <button type="submit" className="px-6 py-2 bg-theme text-white font-bold">Submit</button>
      </div>
    </form>

  )
}
