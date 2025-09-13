"use client";

import Button from "./Button";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "80819495-ebd0-4ebd-9924-be313f7f0694",
        name: e.target.firstName.value + " " + e.target.lastName.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col gap-4 tracking-tight"
    >
      <div className="flex flex-col">
        <label htmlFor="firstName" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="firstName"
          required
          placeholder="John Doe"
          className="form-input"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="email@example.com"
          className="form-input"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="organization" className="form-label">
          What's your organization
        </label>
        <input
          type="text"
          name="lastName"
          required
          placeholder="I'm writing individually / My organization is ..."
          className="form-input"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName" className="form-label">
          What services are you looking for?
        </label>
        <input
          type="text"
          name="lastName"
          required
          placeholder="App Development, Web Development, Design, ..."
          className="form-input"
        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="message" className="form-label">
          Your Message
        </label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="Hello, how are you? Can you help me out with ..."
          className="form-input"
        ></textarea>
      </div>

      <div className="w-full flex justify-end">
        <Button type="submit" title="Send Message" />
      </div>
    </form>
  );
};

export default ContactForm;
