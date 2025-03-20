import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Our Platform!</h1>
        <p>Your one-stop destination for all things amazing.</p>
      </header>

      <section className="user-profile">
        <h2>Your Profile</h2>
        <div className="profile-details">
          {/* <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="profile-avatar"
          /> */}
          <div className="Admi-info">
            <p><strong>Name:</strong> Harsh</p>
            <p><strong>Email:</strong> harsh@gmail.com</p>
            <p><strong>Member Since:</strong> January 2023</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-card">
            <h3>Latest News</h3>
            <p>Stay updated with the latest happenings in the world.</p>
          </div>
          <div className="feature-card">
            <h3>Upcoming Events</h3>
            <p>Don't miss out on exciting events near you.</p>
          </div>
          <div className="feature-card">
            <h3>Personalized Dashboard</h3>
            <p>Access your personalized dashboard for a tailored experience.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;