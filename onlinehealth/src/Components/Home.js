import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'; // Import your CSS file

export default function Home() {
  return (
    <>
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px', backgroundColor: '#f2f2f2' }}>
      <div style={{ textAlign: 'center' }}>
        <p className="custom-paragraph">
        ℍ𝕒𝕧𝕖 𝕪𝕠𝕦 𝕖𝕧𝕖𝕣 𝕥𝕣𝕚𝕖𝕕 𝕆𝕟𝕝𝕚𝕟𝕖 ℕ𝕦𝕥𝕣𝕚𝕥𝕚𝕠𝕟 ℂ𝕠𝕟𝕤𝕦𝕝𝕥𝕒𝕥𝕚𝕠𝕟? 𝔾𝕚𝕧𝕖 𝕚𝕥 𝕒 𝕥𝕣𝕪 𝕗𝕠𝕣 𝕒 𝕙𝕖𝕒𝕝𝕥𝕙𝕚𝕖𝕣 𝕪𝕠𝕦.
        </p>
        <Link to="/consult">
          <button className="consult-button">Consult Nutritionists Now</button>
        </Link>
      </div>
      <img src="homesupimage.jpg" style={{ width: '763px', height: '402px' }} />
    </div>
    <h1>Our Thoughts</h1>
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px', backgroundColor: '#f2f2f2' }}>
      <div style={{ textAlign: 'center'}}>
        <p className="custom-paragraph">
        𝔸𝕣𝕖 𝕐𝕠𝕦 𝕎𝕒𝕟𝕥 𝕥𝕠 𝔸𝕕𝕠𝕡𝕥 ℍ𝕖𝕒𝕝𝕥𝕙𝕪 ℍ𝕒𝕓𝕚𝕥𝕤
        </p>
        <Link to="/healthyhabits">
          <button className="consult-button">Learn Healthy Habits</button>
        </Link>
      </div>
      <img src="healhab.jpg" style={{ width: '763px', height: '402px' }}/> 
    </div>
    <div>
    <img src="about.jpeg" style={{ width: '250px', height: '80px' }}/> 
      <div className="bathai">
        <p>𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚝𝚘 𝙾𝚗𝚕𝚒𝚗𝚎 𝙷𝚎𝚊𝚕𝚝𝚑 𝚊𝚗𝚍 𝙽𝚞𝚝𝚛𝚒𝚝𝚒𝚘𝚗 𝙲𝚘𝚗𝚜𝚞𝚕𝚝𝚊𝚝𝚒𝚘𝚗! 𝚆𝚎 𝚊𝚛𝚎 𝚍𝚎𝚍𝚒𝚌𝚊𝚝𝚎𝚍 𝚝𝚘 𝚢𝚘𝚞𝚛 𝚠𝚎𝚕𝚕-𝚋𝚎𝚒𝚗𝚐 𝚊𝚗𝚍 𝚌𝚘𝚖𝚖𝚒𝚝𝚝𝚎𝚍 𝚝𝚘 𝚑𝚎𝚕𝚙𝚒𝚗𝚐 𝚢𝚘𝚞 𝚊𝚌𝚑𝚒𝚎𝚟𝚎 𝚢𝚘𝚞𝚛 𝚑𝚎𝚊𝚕𝚝𝚑 𝚊𝚗𝚍 𝚗𝚞𝚝𝚛𝚒𝚝𝚒𝚘𝚗 𝚐𝚘𝚊𝚕𝚜. 𝙾𝚞𝚛 𝚝𝚎𝚊𝚖 𝚘𝚏 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎𝚍 𝚊𝚗𝚍 𝚙𝚊𝚜𝚜𝚒𝚘𝚗𝚊𝚝𝚎 𝚗𝚞𝚝𝚛𝚒𝚝𝚒𝚘𝚗𝚒𝚜𝚝𝚜 𝚊𝚗𝚍 𝚑𝚎𝚊𝚕𝚝𝚑 𝚎𝚡𝚙𝚎𝚛𝚝𝚜 𝚒𝚜 𝚑𝚎𝚛𝚎 𝚝𝚘 𝚐𝚞𝚒𝚍𝚎 𝚢𝚘𝚞 𝚘𝚗 𝚢𝚘𝚞𝚛 𝚓𝚘𝚞𝚛𝚗𝚎𝚢 𝚝𝚘 𝚊 𝚑𝚎𝚊𝚕𝚝𝚑𝚒𝚎𝚛 𝚊𝚗𝚍 𝚑𝚊𝚙𝚙𝚒𝚎𝚛 𝚕𝚒𝚏𝚎.</p>
      </div>
    </div>
  </>
  );
}