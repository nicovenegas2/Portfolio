import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialMedia from '../Component/SocialMedia';

const buttonLabels = {
  idle: 'Send message',
  sending: 'Sending…',
  success: 'Message sent',
  error: 'Send message',
};

const statusMessages = {
  success: 'Thanks for reaching out. I’ll get back to you soon.',
  error:
    'Your message could not be sent. Please try again or contact me on LinkedIn.',
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const emailConfigured = Boolean(
    import.meta.env.VITE_SERVICE_ID_JS &&
    import.meta.env.VITE_TEMPLATE_ID_JS &&
    import.meta.env.VITE_PUBLIC_KEY_JS,
  );
  async function sendMessage(event) {
    event.preventDefault();
    if (!emailConfigured || status === 'sending') return;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID_JS,
        import.meta.env.VITE_TEMPLATE_ID_JS,
        formRef.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY_JS },
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  }
  return (
    <div className="contact-content">
      <span className="contact-mark" aria-hidden="true">
        Hello.
      </span>
      <h2>Let’s build something.</h2>
      <p>Have a project in mind, or a team I could be part of? Let’s talk.</p>
      {emailConfigured ? (
        <form ref={formRef} onSubmit={sendMessage}>
          <div className="form-row">
            <label>
              Your name
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="from_email"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label>
            What are you working on?
            <textarea name="message" rows="4" required />
          </label>
          <button
            className="button solid"
            disabled={status === 'sending' || status === 'success'}
          >
            {buttonLabels[status]}
          </button>
          <p role="status">{statusMessages[status] || ''}</p>
        </form>
      ) : (
        <div className="contact-alternative">
          <p>You can reach me directly on LinkedIn.</p>
          <a
            className="button solid"
            href="https://www.linkedin.com/in/covedev"
            target="_blank"
            rel="noreferrer"
          >
            Message on LinkedIn
          </a>
        </div>
      )}
      <SocialMedia />
    </div>
  );
}
