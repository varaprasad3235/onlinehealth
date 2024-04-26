import React from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const profileStyles = {
  container: {
    marginTop: '60px',
    textAlign: 'center',
    padding: '20px',
  },
  welcomeText: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  logoutButton: {
    background: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  },
  profileIcon: {
    marginRight: '8px',
  },
};

export default function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <div style={profileStyles.container}>
      <h2 style={profileStyles.welcomeText}>
        <FontAwesomeIcon icon={faUser} style={profileStyles.profileIcon} /> Your Profile
      </h2>
      Welcome: {auth.user}
      {' '}
      <button style={profileStyles.logoutButton} onClick={handleLogout}>Logout</button>
    </div>
  );
}
