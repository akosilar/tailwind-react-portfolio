import { useState } from "react"
import { Dialog, DialogTitle } from '@headlessui/react'

export default function EmailForm() {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactMessage: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const encode = (data) => {
    return new URLSearchParams(data).toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const validationErrors = {};
    if (!formData.contactName) validationErrors.contactName = "Name is required";
    if (!formData.contactEmail) validationErrors.contactEmail = "Email is required";
    if (!formData.contactMessage) validationErrors.contactMessage = "Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setIsSuccess(true);
        setOpen(true);
      })
      .catch(error => alert(error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const { contactName, contactEmail, contactMessage } = formData;
  return (
    <div>
      <Dialog className="relative z-10" open={open} onClose={() => {
        setOpen(false)
        setIsSuccess(false)
      }}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Thank you!
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your form submission has been received.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-theme px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                  onClick={() => {
                    setIsSuccess(false);
                    setOpen(false);
                  }}
                >
                  Return
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>

      {!isSuccess && (
        <form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div className="space-y-12">
            <div>
              <label className="text-white block mb-6 text-xl font-bold">Name</label>
              <input
                className="w-full border border-input-border bg-input px-4 py-4"
                name="contactName"
                onChange={handleChange}
                value={contactName}
              />
              {errors.contactName && <p className="text-red-500 text-sm">{errors.contactName}</p>}
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">Email</label>
              <input
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4"
                name="contactEmail"
                onChange={handleChange}
                value={contactEmail}
              />
              {errors.contactEmail && <p className="text-red-500 text-sm">{errors.contactEmail}</p>}
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">Message</label>
              <textarea
                className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                name="contactMessage"
                onChange={handleChange}
                value={contactMessage}
              ></textarea>
              {errors.contactMessage && <p className="text-red-500 text-sm">{errors.contactMessage}</p>}
            </div>
            <button type="submit" className="px-6 py-2 bg-theme text-white font-bold">Submit</button>
          </div>
        </form>
      )}
    </div>
  )
}

