import type { MetadataRoute } from 'next';
import { profile } from '@/content/profile';
export const dynamic = 'force-static';
import { projects } from '@/content/projects';
export default function sitemap():MetadataRoute.Sitemap{return ['','/about','/experience','/projects','/awards','/resume','/contact',...projects.map(p=>'/projects/'+p.slug)].map(path=>({url:profile.domain+path+'/',changeFrequency:'monthly',priority:path===''?1:0.7}));}
