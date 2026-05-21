"use client";

import { useCallback, useState } from "react";

import {
  contactCompanySizeOptions,
  contactInquiryTypes,
  contactProductOptions,
} from "lib/upcube-portal/content";

type FormFields = {
  inquiryType: string;
  productInterest: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  companySize: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

type FormState = "idle" | "validating" | "prepared" | "error";

const INITIAL_FIELDS: FormFields = {
  inquiryType: "",
  productInterest: "",
  email: "",
  firstName: "",
  lastName: "",
  company: "",
  companySize: "",
  website: "",
  message: "",
};

function validateFields(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  if (!fields.inquiryType) {
    errors.inquiryType = "Select an inquiry type";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!fields.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!fields.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!fields.message.trim()) {
    errors.message = "Message is required";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS);
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormErrors];
        return next;
      });
    }
  }

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setState("validating");
      const validationErrors = validateFields(fields);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        setState("error");
        return;
      }

      setState("prepared");
    },
    [fields],
  );

  function handleReset() {
    setFields(INITIAL_FIELDS);
    setErrors({});
    setState("idle");
  }

  const fieldClass = "uc-form-field";
  const labelClass = "uc-form-label";
  const inputClass = "uc-form-input";
  const errorClass = "uc-form-error";
  const selectClass = "uc-form-select";
  const textareaClass = "uc-form-textarea";

  if (state === "prepared") {
    return (
      <div className="uc-form-success" role="status">
        <div className="uc-form-success__icon" aria-hidden="true">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="uc-form-success__title">Request recorded</h3>
        <p className="uc-form-success__message">
          Contact form backend is not configured yet. Your message was not
          transmitted. When a live endpoint is connected, your inquiry will
          reach the Upcube team.
        </p>
        <button
          type="button"
          className="uc-button"
          data-variant="solid"
          onClick={handleReset}
        >
          Submit another request
        </button>
      </div>
    );
  }

  function renderField({
    label,
    name,
    type = "text",
    required = false,
    placeholder,
    autoComplete,
  }: {
    label: string;
    name: keyof FormFields;
    type?: string;
    required?: boolean;
    placeholder?: string;
    autoComplete?: string;
  }) {
    const errorId = `error-${name}`;
    return (
      <div className={fieldClass}>
        <label className={labelClass} htmlFor={`contact-${name}`}>
          {label}
          {required ? <span aria-hidden="true"> *</span> : null}
        </label>
        <input
          id={`contact-${name}`}
          className={inputClass}
          type={type}
          name={name}
          value={fields[name]}
          onChange={handleChange}
          required={required}
          aria-required={required}
          aria-describedby={errors[name] ? errorId : undefined}
          aria-invalid={errors[name] ? "true" : undefined}
          autoComplete={autoComplete}
          placeholder={placeholder}
        />
        {errors[name] ? (
          <p className={errorClass} id={errorId} role="alert">
            {errors[name]}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      className="uc-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <div className={fieldClass}>
        <label className={labelClass} htmlFor="contact-inquiry-type">
          What are you interested in? <span aria-hidden="true">*</span>
        </label>
        <select
          id="contact-inquiry-type"
          className={selectClass}
          name="inquiryType"
          value={fields.inquiryType}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby={
            errors.inquiryType ? "error-inquiry-type" : undefined
          }
          aria-invalid={errors.inquiryType ? "true" : undefined}
        >
          <option value="">Select inquiry type</option>
          {contactInquiryTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.inquiryType ? (
          <p className={errorClass} id="error-inquiry-type" role="alert">
            {errors.inquiryType}
          </p>
        ) : null}
      </div>

      <div className={fieldClass}>
        <label className={labelClass} htmlFor="contact-product-interest">
          Product interest <span aria-hidden="true">*</span>
        </label>
        <select
          id="contact-product-interest"
          className={selectClass}
          name="productInterest"
          value={fields.productInterest}
          onChange={handleChange}
          required
          aria-required="true"
        >
          <option value="">Select a product</option>
          {contactProductOptions.map((product) => (
            <option key={product.value} value={product.value}>
              {product.label}
            </option>
          ))}
        </select>
      </div>

      {renderField({
        label: "Work email",
        name: "email",
        type: "email",
        required: true,
        autoComplete: "email",
      })}

      <div className={fieldClass}>
        <div className="uc-form-row">
          {renderField({
            label: "First name",
            name: "firstName",
            required: true,
            autoComplete: "given-name",
          })}
          {renderField({
            label: "Last name",
            name: "lastName",
            required: true,
            autoComplete: "family-name",
          })}
        </div>
      </div>

      {renderField({
        label: "Company or organization",
        name: "company",
        autoComplete: "organization",
      })}

      <div className={fieldClass}>
        <label className={labelClass} htmlFor="contact-company-size">
          Company size
        </label>
        <select
          id="contact-company-size"
          className={selectClass}
          name="companySize"
          value={fields.companySize}
          onChange={handleChange}
        >
          <option value="">Select company size</option>
          {contactCompanySizeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {renderField({
        label: "Website",
        name: "website",
        type: "url",
        autoComplete: "url",
        placeholder: "https://",
      })}

      <div className={fieldClass}>
        <label className={labelClass} htmlFor="contact-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          className={textareaClass}
          name="message"
          rows={5}
          value={fields.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby={errors.message ? "error-message" : undefined}
          aria-invalid={errors.message ? "true" : undefined}
        />
        {errors.message ? (
          <p className={errorClass} id="error-message" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="uc-form-actions">
        <button
          type="submit"
          className="uc-button"
          data-variant="solid"
          disabled={state === "validating"}
        >
          {state === "validating" ? "Submitting..." : "Submit"}
        </button>
      </div>

      <p className="uc-form-footnote">
        Contact form backend is not configured yet. This form prepares your
        request locally and does not transmit data.
      </p>
    </form>
  );
}
