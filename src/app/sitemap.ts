import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
export default function sitemap():MetadataRoute.Sitemap{return ['','/about','/experience','/projects','/awards','/resume','/contact',...projects.map(p=>'/projects/'+p.slug)].map(path=>({url:'https://prashantbhattarai.com'+path,changeFrequency:'monthly',priority:path===''?1:0.7}));}
