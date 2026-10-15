import { PageIntro, ContactBanner } from '@/components/shared';
import { ProjectBrowser } from '@/components/ui';
export const metadata={title:'Projects',description:'Explore data pipelines, geospatial analytics, financial stress testing, and machine learning projects.'};
export default function Projects(){return <div className="wrap"><PageIntro label="PROJECTS & CASE STUDIES" title="Projects." description="Data pipelines, financial research, GIS analysis, and forecasting."/><ProjectBrowser/><ContactBanner/></div>;}
