import { ImageResponse } from 'next/og';
export const alt='Prashant B — Data, Analytics & Finance';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#f7f5ee',color:'#192d45',width:'100%',height:'100%',display:'flex',flexDirection:'column',padding:75,justifyContent:'space-between'}}><div style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid #192d45',paddingBottom:25}}><span style={{fontSize:30}}>Prashant B.</span><span style={{fontSize:17,color:'#5d6570'}}>DATA / ANALYTICS / FINANCE</span></div><div style={{display:'flex',flexDirection:'column',fontSize:92,letterSpacing:-5,lineHeight:1.05}}><span>From complexity</span><span style={{color:'#b83a24'}}>to clarity.</span></div><div style={{display:'flex',justifyContent:'space-between',fontSize:19,color:'#5d6570'}}><span>Prashant Bhattarai</span><span>prashantbhattarai.com</span></div></div>,size);}
