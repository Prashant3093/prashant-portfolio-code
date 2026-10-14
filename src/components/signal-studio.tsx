'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Database, ChartNoAxesCombined, Landmark, Pause, Play } from 'lucide-react';
import { visualPalettes } from '@/content/visual-palettes';

const disciplines = [
  {name:'Data', title:'Build the foundation.', subtitle:'ORDER FROM COMPLEXITY', description:'Reliable pipelines. Thoughtful architecture. Data that is ready for what comes next.', tools:['SQL','Python','PySpark','Microsoft Fabric'], href:'/projects/enterprise-data-engineering', link:'Explore the architecture', icon:Database, labels:['Sources','Ingest','Bronze','Silver','Gold','Insight']},
  {name:'Analytics', title:'Find the signal.', subtitle:'PATTERNS INTO PERSPECTIVE', description:'Business intelligence and statistical analysis that turn complex information into useful decisions.', tools:['Power BI','Visualization','KPI reporting','Statistics'], href:'/projects/dubuque-street-conditions', link:'Explore the analysis', icon:ChartNoAxesCombined, labels:['Observe','Compare','Understand']},
  {name:'Finance', title:'Understand the impact.', subtitle:'A WIDER VIEW OF THE OUTCOME', description:'Financial models, economic research, and banking experience grounded in real business questions.', tools:['Financial analysis','Economics','Stress testing','FBLA'], href:'/projects/household-financial-stress-testing', link:'Explore the research', icon:Landmark, labels:['Mild','Moderate','Severe']},
] as const;

const nodeIds = Array.from({length:48},(_,i)=>i);
function position(index:number,mode:number){
  if(mode===0)return {x:125+Math.floor(index/8)*110,y:98+(index%8)*31};
  if(mode===1){const series=Math.floor(index/12);const step=index%12;return {x:95+step*55,y:255-Math.sin(step*.55+series*.85)*65-series*26-step*4};}
  const angle=Math.floor(index/3)/16*Math.PI*2-Math.PI/2;
  const radius=66+(index%3)*53;
  return {x:400+Math.cos(angle)*radius*1.45,y:208+Math.sin(angle)*radius};
}

export default function SignalStudio(){
  const [selected,setSelected]=useState(0);
  const [paused,setPaused]=useState(false);
  const reduced=useReducedMotion();
  const id=useId();
  const current=disciplines[selected];
  const palette=visualPalettes[selected];
  const running=!paused&&!reduced;
  const transition={duration:reduced?0:.85,ease:'easeInOut' as const};
  function select(index:number,focus=false){setSelected(index);if(focus)document.getElementById(`${id}-tab-${index}`)?.focus();}
  return <div className="signal-studio">
    <div className="signal-header"><div><span className="signal-live-dot"/><span className="eyebrow">THE INTERACTIVE EDITION</span></div><span className="mono">THREE DISCIPLINES / ONE CONNECTED MIND</span></div>
    <div className="signal-body">
      <div className="signal-visual" data-running={running} onPointerMove={event=>{const r=event.currentTarget.getBoundingClientRect();event.currentTarget.style.setProperty('--signal-x',`${event.clientX-r.left}px`);event.currentTarget.style.setProperty('--signal-y',`${event.clientY-r.top}px`);}}>
        <div className="signal-visual-top"><span className="mono">0{selected+1} / {current.subtitle}</span><button className="signal-pause" onClick={()=>setPaused(!paused)} aria-label={running?'Pause visual animation':'Play visual animation'} disabled={Boolean(reduced)} title={reduced?'Reduced motion is enabled':undefined}>{running?<Pause size={13}/>:<Play size={13}/>}<span>{reduced?'Reduced motion':running?'Pause':'Play'}</span></button></div>
        <svg viewBox="0 0 800 400" className="signal-svg" role="img" aria-label={`${current.name} conceptual visualization. ${selected===0?'Nodes connect through six pipeline stages.':selected===1?'Nodes form four illustrative signal curves.':'Nodes form three concentric scenario rings.'} This is not measured project data.`}>
          <defs><pattern id={`${id}-grid`} width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" opacity=".12"/></pattern></defs>
          <rect width="800" height="400" fill={`url(#${id}-grid)`}/>
          {selected===1&&<g className="signal-axes"><path d="M75 65V340H740"/><path d="M75 150H740M75 245H740" strokeDasharray="3 6"/></g>}
          {selected===2&&<g fill="none" stroke="currentColor" opacity=".16">{[66,119,172].map(radius=><ellipse key={radius} cx="400" cy="208" rx={radius*1.45} ry={radius} strokeDasharray="3 8"/>)}<circle cx="400" cy="208" r="30"/><text x="400" y="213" className="signal-center-label" textAnchor="middle">WHAT IF?</text></g>}
          <g fill="none" strokeWidth="1.2">{nodeIds.map(i=>{
            const end=selected===0?i+8:selected===1?(i%12===11?-1:i+1):(i+3)%48;
            if(end<0||end>47)return null;
            const a=position(i,selected),b=position(end,selected);
            return <motion.line key={i} initial={false} animate={{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:palette.colors[i%4],opacity:selected===0?.42:.65}} transition={transition}/>;
          })}</g>
          {nodeIds.map(i=>{const p=position(i,selected);return <motion.circle key={i} initial={false} animate={{cx:p.x,cy:p.y,r:selected===0?(i%8===0?6:3.5):selected===1?4:5,fill:palette.colors[i%4]}} transition={transition}/>;})}
          {selected===0&&<g className="signal-stage-labels">{current.labels.map((label,i)=><text key={label} x={125+i*110} y="365" textAnchor="middle">{label}</text>)}</g>}
          {selected===1&&<g className="signal-stage-labels"><text x="95" y="368">OBSERVE</text><text x="700" y="368" textAnchor="end">UNDERSTAND →</text></g>}
          {selected===2&&<g className="signal-stage-labels"><text x="400" y="24" textAnchor="middle">EXPLORE THE RANGE OF POSSIBLE OUTCOMES</text><text x="400" y="395" textAnchor="middle">MILD / MODERATE / SEVERE</text></g>}
          <g className="signal-scan" aria-hidden="true"><path d="M65 45V335" stroke={palette.colors[0]} strokeWidth="1" strokeDasharray="4 6" opacity=".5"/></g>
        </svg>
        <div className="signal-visual-bottom"><span className="mono">CONCEPTUAL ART / NO LIVE DATA</span><div className="signal-swatches" aria-hidden="true">{palette.colors.map(color=><span key={color} style={{background:color}}/>)}</div></div>
      </div>
      <div className="signal-info">
        <div className="signal-tabs" role="tablist" aria-label="Explore professional disciplines">{disciplines.map((d,i)=>{const Icon=d.icon;return <button key={d.name} role="tab" id={`${id}-tab-${i}`} aria-controls={`${id}-panel`} aria-selected={selected===i} tabIndex={selected===i?0:-1} onClick={()=>select(i)} onKeyDown={event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();select(event.key==='Home'?0:event.key==='End'?2:(selected+(event.key==='ArrowRight'?1:2))%3,true);}}}><Icon size={15}/>{d.name}</button>;})}</div>
        <div className="signal-panel" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${selected}`} tabIndex={0}><p className="signal-panel-index">0{selected+1}<span>/ 03</span></p><h3>{current.title}</h3><p>{current.description}</p><div className="tags">{current.tools.map(tool=><span key={tool}>{tool}</span>)}</div><Link className="text-link" href={current.href}>{current.link}<ArrowUpRight size={17}/></Link></div>
      </div>
    </div>
  </div>;
}
