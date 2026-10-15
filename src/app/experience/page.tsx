import { PageIntro, ContactBanner } from '@/components/shared';
import { ExperienceTimeline } from '@/components/ui';
export const metadata={title:'Experience',description:'Professional progression in data engineering, analytics, and banking.'};
export default function Experience(){return <div className="wrap"><PageIntro label="PROFESSIONAL EXPERIENCE" title="Experience." description="My internships in data engineering, analytics, and banking. Select a role for details."/><div className="progression"><span>HILLS & DALES</span><strong>Data Analyst Intern <span>↗</span> Data Engineer Intern</strong><p>August 2025 – July 2026 → August 2026 – Present</p></div><ExperienceTimeline/><ContactBanner/></div>;}
