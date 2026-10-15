import type { Metadata } from 'next';
import { profile } from '@/content/profile';
import { Header, PageTransition, AmbientEffects } from '@/components/ui';
import { Footer } from '@/components/shared';
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL(profile.domain),title:{default:'Prashant Bhattarai — Data · Analytics · Finance',template:'%s | Prashant Bhattarai'},description:'Prashant Bhattarai’s portfolio: data engineering, analytics, finance, and research.',openGraph:{title:'Prashant Bhattarai — Data · Analytics · Finance',description:'Data engineering, analytics, and finance projects by Prashant Bhattarai.',type:'website',locale:'en_US',siteName:'Prashant Bhattarai',images:[{url:profile.domain+'/social-preview.png',width:1200,height:630}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="light" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:"try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'light'}catch(e){}"}}/></head><body><AmbientEffects/><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><PageTransition>{children}</PageTransition></main><Footer/></body></html>;}
