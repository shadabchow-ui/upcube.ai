"use client";

export function NewsletterForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = data.get("newsletter-email");
    if (email && typeof email === "string" && email.includes("@")) {
      const container = form.parentElement;
      if (container) {
        const existing = container.querySelector("[data-newsletter-success]");
        if (existing) {
          return;
        }
        const success = document.createElement("div");
        success.setAttribute("data-newsletter-success", "");
        success.className = "uc-form-success uc-form-success--inline";
        success.setAttribute("role", "status");
        success.innerHTML =
          "<p>Subscription request prepared. A backend mailing list handler is not yet deployed, so your email was not transmitted.</p>";
        form.replaceWith(success);
      }
    }
  }

  return (
    <form
      className="uc-newsletter-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Newsletter signup"
    >
      <label className="uc-sr-only" htmlFor="newsletter-email">
        Email address for news updates
      </label>
      <input
        id="newsletter-email"
        className="uc-form-input"
        type="email"
        name="newsletter-email"
        placeholder="you@example.com"
        required
        autoComplete="email"
        aria-label="Email address for news updates"
      />
      <button type="submit" className="uc-button" data-variant="solid">
        Subscribe
      </button>
    </form>
  );
}
