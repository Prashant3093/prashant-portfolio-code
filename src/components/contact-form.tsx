'use client';

import { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '@/content/profile';

export default function ContactForm() {
  const [subject, setSubject] = useState('New portfolio inquiry');

  function validateMessage(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const fields = new FormData(form);
    for (const name of ['name', 'message']) {
      if (!String(fields.get(name) ?? '').trim()) {
        event.preventDefault();
        const input = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
        input.setCustomValidity('Please enter more than spaces.');
        input.reportValidity();
        return;
      }
    }
    // A native browser POST handles delivery and the provider's CAPTCHA/error pages.
    // No optimistic success state: only the email service can confirm acceptance.
  }

  return <section className="message-panel" aria-labelledby="message-heading">
    <div className="message-panel-heading"><div><p className="eyebrow">LET’S TALK</p><h2 id="message-heading">What’s on your mind?</h2></div><Mail size={26} aria-hidden="true"/></div>
    <p className="message-intro">Leave your contact details and a message.</p>
    <form action={`https://formsubmit.co/${profile.email}`} method="POST" onSubmit={validateMessage} aria-describedby="message-delivery" onInput={event => {
      const input = event.target as HTMLInputElement | HTMLTextAreaElement;
      input.setCustomValidity('');
      if (input.name === 'name') setSubject(`Portfolio inquiry from ${input.value.trim() || 'a visitor'}`);
    }}>
      <input type="hidden" name="_subject" value={subject}/>
      <input type="hidden" name="_template" value="table"/>
      <input type="hidden" name="_next" value={`${profile.domain}/`}/>
      <input type="hidden" name="_url" value={`${profile.domain}/contact/`}/>
      <div className="contact-honeypot" aria-hidden="true"><label htmlFor="sender-website">Leave this field empty<input id="sender-website" name="_honey" tabIndex={-1} autoComplete="off"/></label></div>
      <div className="message-fields">
        <label htmlFor="sender-name">Your name <span>(required)</span><input id="sender-name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100}/></label>
        <label htmlFor="sender-email">Your email <span>(required)</span><input id="sender-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/></label>
      </div>
      <label htmlFor="sender-phone">Phone number <span>(optional)</span><input id="sender-phone" name="phone" type="tel" autoComplete="tel" placeholder="A number to reach you" maxLength={60}/></label>
      <label htmlFor="sender-message">Your message <span>(required)</span><textarea id="sender-message" name="message" rows={6} placeholder="Tell me about your opportunity, question, or idea…" required maxLength={2000}/></label>
      <div className="message-submit"><button className="button primary" type="submit">Send message<ArrowUpRight size={18}/></button><p id="message-delivery">Sends through FormSubmit. You may be asked to complete a spam check.</p></div>
    </form>
  </section>;
}
