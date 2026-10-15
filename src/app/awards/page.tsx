import { PageIntro, AwardsList, ContactBanner } from '@/components/shared';
export const metadata={title:'Awards & Recognition',description:'FBLA state championship achievements and a national Top 10 Economics finish.'};
export default function Awards(){return <div className="wrap"><PageIntro label="AWARDS & RECOGNITION" title="Awards." description="My FBLA results in Economics and Computer Science."/><AwardsList/><ContactBanner/></div>;}
