import React from 'react';
import { Link } from "react-router-dom";
function Consult() {
  const containerStyle = {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const consultationContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const doctorImageStyle = {
    width: '300px',
    height: '300px',
  };

  const doctorContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // This allows doctor profiles to wrap to the next line if needed
    justifyContent: 'center',
  };
  const doctorStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    color: '#0077b6',
    marginBottom: '10px',
  };

  const doctorInfoStyle = {
    fontSize: '14px',
    color: '#333',
    margin: '10px 0',
  };

  const consultButtonStyle = {
    background: '#0077b6',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div className='nutriinfo' style={containerStyle}>
      <h1 style={{fontSize:'30px'}}><b>𝑪𝒐𝒏𝒔𝒖l𝒕 𝑶𝒖𝒓 𝑬𝒙𝒑𝒆𝒓𝒕𝒔</b></h1>
      <div style={consultationContainerStyle}>
        <div>
          <img src="consulimage.png" alt="Consultation Image" style={doctorImageStyle} />
        </div>
        <div className="doctors-container" style={doctorContainerStyle}>
          <div style={doctorStyle}>
            <img src="Dr.Ajay.jpg" alt="Doctor 1" />
            <h2>Dr.Ajay</h2>
            <p style={doctorInfoStyle}>Specialty: Nutrition and Wellness</p>
            <p style={doctorInfoStyle}>Experience: 10 years</p>
            <p style={doctorInfoStyle}>Education: Ph.D. in Nutrition</p>
            <Link to="/bookappoint">
          <button className="consult-button">Book video Consult</button>
        </Link>
          </div>
          <div style={doctorStyle}>
            <img src="Dr.ashok-seth.jpg" alt="Doctor 2"/>
            <h2>Dr.AshokSeth</h2>
            <p style={doctorInfoStyle}>Specialty: Pediatric Nutrition</p>
            <p style={doctorInfoStyle}>Experience: 8 years</p>
            <p style={doctorInfoStyle}>Education: M.D. in Pediatrics</p>
            <Link to="/bookappoint">
          <button className="consult-button">Book video Consult</button>
        </Link>
          </div>

          <div style={doctorStyle}>
            <img src="DR.YKMISHRA.jpeg" alt="Doctor 3" />
            <h2>DR.YKMISHRA</h2>
            <p style={doctorInfoStyle}>Specialty: Geriatric Nutrition</p>
            <p style={doctorInfoStyle}>Experience: 15 years</p>
            <p style={doctorInfoStyle}>Education: Ph.D. in Geriatrics</p>
            <Link to="/bookappoint">
          <button className="consult-button">Book video Consult</button>
        </Link>
          </div>
          <div style={doctorStyle}>
            <img src="DR.VinodRaina.png" alt="Doctor 4" />
            <h2>DR.VinodRaina</h2>
            <p style={doctorInfoStyle}>Specialty: Geriatric Nutrition</p>
            <p style={doctorInfoStyle}>Experience: 15 years</p>
            <p style={doctorInfoStyle}>Education: Ph.D. in Geriatrics</p>
            <Link to="/bookappoint">
          <button className="consult-button">Book video Consult</button>
        </Link>
          </div>
          <div style={doctorStyle}>
            <img src="DR.sandeepvaishya.jpg" alt="Doctor 5" />
            <h2>DR.Sandeep</h2>
            <p style={doctorInfoStyle}>Specialty: Geriatric Nutrition</p>
            <p style={doctorInfoStyle}>Experience: 15 years</p>
            <p style={doctorInfoStyle}>Education: Ph.D. in Geriatrics</p>
            <Link to="/bookappoint">
          <button className="consult-button">Book video Consult</button>
        </Link>
          </div>
          <div style={doctorStyle}>
            <img src="DR.NareshTrehan.jpg" alt="Doctor 6" />
            <h2>DR.NareshTrehan</h2>
            <p style={doctorInfoStyle}>Specialty:Skin and Hair</p>
            <p style={doctorInfoStyle}>Experience: 15 years</p>
            <p style={doctorInfoStyle}>Education: Ph.D. in Geriatrics</p>
            <Link to="/bookappoint">
          <button className="consult-button">Book video Consult</button>
        </Link>
          </div>
          <div style={doctorStyle}>
            <img src="DR.Meharwal.jpg" alt="Doctor 7" />
            <h2>DR.Meharwal</h2>
            <p style={doctorInfoStyle}>Specialty:ENT</p>
            <p style={doctorInfoStyle}>Experience: 13 years</p>
            <p style={doctorInfoStyle}>Education:Otolaryngology </p>
            <Link to="/bookappoint">
          <button className="consult-button">Book video Consult</button>
        </Link>
          </div>
          <div style={doctorStyle}>
            <img src="DR.Arjun.png" alt="Doctor 8" />
            <h2>Dr.Arjun</h2>
            <p style={doctorInfoStyle}>Specialty:Gastroenterology</p>
            <p style={doctorInfoStyle}>Experience: 13 years</p>
            <p style={doctorInfoStyle}>Education:ph.D in Gastroenterology</p>
            <Link to="/bookappoint">
          <button className="consult-button">Book video Consult</button>
        </Link>
          </div>
          {/* Add more doctor profiles as needed */}
        </div>
      </div>
    </div>
  );
}
export default Consult;
