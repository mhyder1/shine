import { useState } from "preact/hooks";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const message = e.target[2].value;
    const email = e.target[1].value;
    e.target[2].value = `
    ${message}

    Sent from: ${email}
    `;
    emailjs
      .sendForm(
        import.meta.env.VITE_VERCEL_SERVICE_ID!,
        import.meta.env.VITE_VERCEL_TEMPLATE_ID!,
        e.target,
        import.meta.env.VITE_VERCEL_PUBLIC_KEY
      )
      .then(
        () => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        () => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <form onSubmit={sendEmail}>
      <div class="form-group">
        <label for="name">Full name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Full name"
          required
          name="from_name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          name="user_email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter message"
          required
          class="form-control"
          maxLength={100}
        />
      </div>
      <div class="form-group">
        <input
          type="hidden"
          class="form-control"
          name="to_name"
          value="SHINE"
        />
      </div>
      <button
        type="submit"
        class="btn btn-success btn-sm mt-2"
        disabled={isSubmitting}
      >
        Send
      </button>
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

export default ContactForm;
