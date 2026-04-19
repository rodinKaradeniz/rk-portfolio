"use client";

import { useState } from "react";
import Button from "./Button";
import { useLocale } from "@/context/LocaleContext";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLocale();

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
        name: e.target.firstName.value,
        email: e.target.email.value,
        organization: e.target.organization.value,
        services: e.target.services.value,
        message: e.target.message.value,
        botcheck: e.target.botcheck.value,
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
      {/* Honeypot — hidden from users, triggers Web3Forms spam filter if filled by a bot */}
      <input
        type="text"
        name="botcheck"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex flex-col">
        <label htmlFor="firstName" className="form-label">
          {t.form.name}
        </label>
        <input
          type="text"
          name="firstName"
          required
          placeholder={t.form.namePlaceholder}
          className="form-input"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="form-label">
          {t.form.email}
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder={t.form.emailPlaceholder}
          className="form-input"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="organization" className="form-label">
          {t.form.organization}
        </label>
        <input
          type="text"
          name="organization"
          required
          placeholder={t.form.organizationPlaceholder}
          className="form-input"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="services" className="form-label">
          {t.form.services}
        </label>
        <input
          type="text"
          name="services"
          required
          placeholder={t.form.servicesPlaceholder}
          className="form-input"
        />
      </div>

      <div className="flex flex-col mb-5">
        <label htmlFor="message" className="form-label">
          {t.form.message}
        </label>
        <textarea
          name="message"
          required
          rows={3}
          placeholder={t.form.messagePlaceholder}
          className="form-input"
        ></textarea>
      </div>

      <div className="w-full flex justify-end">
        {submitted ? (
          <p className="text-sm tracking-tight">{t.form.sent}</p>
        ) : (
          <Button type="submit" title={t.form.send} />
        )}
      </div>
    </form>
  );
};

export default ContactForm;
