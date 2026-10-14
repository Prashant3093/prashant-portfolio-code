import { ArrowUpRight, Mail } from 'lucide-react';
import { PageIntro } from '@/components/shared';
import ContactForm from '@/components/contact-form';
import { CopyEmail } from '@/components/ui';
import { profile } from '@/content/profile';
import { socials } from '@/content/socials';
export const metadata={title:'Contact',description:'Connect with Prashant Bhattarai about data engineering, analytics, finance, and meaningful work.'};
export default function Contact(){return <div className="wrap contact-page"><PageIntro label="GOOD WORK STARTS WITH A CONVERSATION" title="Let’s build something meaningful." description="Have an opportunity, a question about my work, or an interesting problem to solve? I’d love to hear from you."/><ContactForm/><div className="contact-grid"><div className="contact-email"><Mail size={30}/><p className="eyebrow">DROP ME A LINE</p><a className="email-link" href={'mailto:'+profile.email}>{profile.email}<ArrowUpRight/></a><div className="email-options"><a className="button secondary" href={'https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(profile.email)} target="_blank" rel="noopener noreferrer">Open in Gmail<ArrowUpRight size={16}/></a><CopyEmail/></div></div><div className="contact-links">{socials.map(s=><a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"><span><small className="eyebrow">FIND ME ON</small>{s.label}</span><ArrowUpRight/></a>)}</div></div><div className="contact-signoff"><span>DATA</span>✳<span>ANALYTICS</span>✳<span>FINANCE</span></div></div>;}
