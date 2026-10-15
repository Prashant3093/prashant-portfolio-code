import { useId } from 'react';

export function EngineeringVisual(){
 const id=useId();
 return <svg viewBox="0 0 600 340" className="engineering-visual">
  <defs><pattern id={`${id}-dots`} width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="currentColor" opacity=".12"/></pattern><marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="var(--teal)"/></marker></defs>
  <rect width="600" height="340" fill={`url(#${id}-dots)`}/>
  <text x="30" y="42" className="visual-micro">DATA PIPELINE</text>
  <g className="visual-source-box">{['REST APIs','Salesforce','Other sources'].map((label,i)=><g key={label}><rect x="30" y={81+i*60} width="123" height="38" rx="7"/><circle cx="45" cy={100+i*60} r="3"/><text x="58" y={104+i*60}>{label}</text></g>)}</g>
  <g className="visual-pipeline" markerEnd={`url(#${id}-arrow)`}><path d="M153 100H190V215H247"/><path d="M153 160H190"/><path d="M153 220H190"/><path d="M450 114H499V238"/></g>
  <g className="visual-stack">
   <g className="stack-bronze"><path d="M245 207L350 164L455 207V224L350 267L245 224Z"/><path d="M245 207L350 250L455 207M350 250V267"/><text x="350" y="216" textAnchor="middle">BRONZE</text></g>
   <g className="stack-silver"><path d="M245 160L350 117L455 160V177L350 220L245 177Z"/><path d="M245 160L350 203L455 160M350 203V220"/><text x="350" y="169" textAnchor="middle">SILVER</text></g>
   <g className="stack-gold"><path d="M245 113L350 70L455 113V130L350 173L245 130Z"/><path d="M245 113L350 156L455 113M350 156V173"/><text x="350" y="122" textAnchor="middle">GOLD</text></g>
  </g>
  <g className="visual-output"><rect x="441" y="244" width="126" height="49" rx="7"/><path d="M456 277v-9m7 9v-18m7 18v-13"/><text x="481" y="274">Power BI</text></g>
  <text x="351" y="300" textAnchor="middle" className="visual-micro">MICROSOFT FABRIC / LAKEHOUSE</text>
 </svg>;
}

export function StreetVisual(){
 const id=useId();
 const roads=['M45 28L83 91L159 137L206 225L266 340','M145 0L175 70L250 119L295 198L350 340','M265 0L290 64L365 114L410 199L472 340','M400 0L421 63L497 113L538 188L596 270','M0 111L99 81L180 66L290 43L416 26L552 5','M0 198L89 164L178 143L283 120L380 101L503 81L600 64','M0 279L101 245L201 226L306 204L418 183L537 162L600 151','M94 340L170 311L283 284L398 265L490 244L600 221'];
 return <svg viewBox="0 0 600 340" className="street-visual">
  <defs><pattern id={`${id}-blocks`} width="44" height="44" patternUnits="userSpaceOnUse" patternTransform="rotate(-13)"><rect x="5" y="5" width="30" height="30" rx="4" fill="var(--line)" opacity=".32"/></pattern></defs>
  <rect width="600" height="340" fill="var(--surface)"/>
  <path d="M0 0H600V340H0Z" fill={`url(#${id}-blocks)`}/>
  <path d="M555-20C460 80 561 125 488 215S450 299 474 370" className="map-river"/>
  <g className="map-road-borders">{roads.map(d=><path key={d} d={d}/>)}</g>
  <g className="map-road-base">{roads.map(d=><path key={d} d={d}/>)}</g>
  <g className="map-condition good"><path d="M45 28L83 91L159 137L185 185"/><path d="M0 198L89 164L178 143L250 127"/><path d="M265 0L290 64L365 114"/></g>
  <g className="map-condition fair"><path d="M145 0L175 70L250 119L295 198L321 266"/><path d="M89 249L201 226L306 204L418 183"/></g>
  <g className="map-condition poor"><path d="M365 114L410 199L435 255"/><path d="M201 226L230 280L266 340"/><path d="M283 120L380 101L465 87"/></g>
  <g className="map-location"><circle cx="250" cy="119" r="13"/><circle cx="250" cy="119" r="4"/></g>
  <g className="map-key"><rect x="25" y="27" width="177" height="45" rx="6"/><circle cx="42" cy="50" r="4"/><text x="55" y="54">STREET CONDITION ATLAS</text></g>
  <g className="map-summary"><rect x="369" y="224" width="201" height="87" rx="7"/><text x="385" y="246" className="visual-micro">DUBUQUE / PROJECT COVERAGE</text><text x="385" y="278" className="map-stat">3,069</text><text x="478" y="278" className="map-stat">266 mi</text><text x="385" y="296" className="visual-micro">SEGMENTS</text><text x="478" y="296" className="visual-micro">STREET NETWORK</text></g>
  <g className="map-legend"><circle cx="32" cy="310" r="3" className="good"/><text x="40" y="314">Good</text><circle cx="85" cy="310" r="3" className="fair"/><text x="93" y="314">Fair</text><circle cx="133" cy="310" r="3" className="poor"/><text x="141" y="314">Poor</text></g>
 </svg>;
}
