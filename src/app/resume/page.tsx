import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/shared';
import { education } from '@/content/education';
import { experience } from '@/content/experience';
import { projects } from '@/content/projects';
import { awards } from '@/content/awards';
import { skills } from '@/content/skills';
import Link from 'next/link';
export const metadata={title:'Resume',description:'Prashant Bhattarai’s education, experience, skills, and projects.'};
export default function Resume(){return <div className="wrap"><PageIntro label="RESUME" title="My background." description="Education, internships, projects, and skills."/><div className="resume-sheet"><section><h2>Education</h2><div><h3>{education.school}</h3><p>{education.period}</p>{education.degrees.map(d=><p key={d}>{d}</p>)}<p className="source-note">Campus memberships: {education.memberships.join(', ')}.</p></div></section><section><h2>Experience</h2><div>{experience.map(e=><article key={e.title}><p className="eyebrow">{e.period}</p><h3>{e.title}</h3><p>{e.employer}</p><ul>{e.bullets.map(b=><li key={b}>{b}</li>)}</ul></article>)}</div></section><section><h2>Projects</h2><div>{projects.map(p=><article key={p.slug}><Link className="text-link" href={'/projects/'+p.slug}>{p.shortTitle}<ArrowUpRight size={16}/></Link><p>{p.description}</p></article>)}</div></section><section><h2>Skills</h2><div>{skills.map(s=><article key={s.name}><h3>{s.name}</h3><p>{s.items.join(' · ')}</p></article>)}</div></section><section><h2>Recognition</h2><div>{awards.map(a=><article key={a.title}><h3>{a.title} · {a.category}</h3><p>{a.event} · {a.year}</p></article>)}</div></section></div></div>;}
