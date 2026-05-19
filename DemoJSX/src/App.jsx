import { useState } from "react";
import "./App.css";
import reactLogo from './assets/react.svg';

function Header(){
  const [followStatus, setFollowStatus] = useState('Following');
  
  return (
    <>
    <div className="profile-card">
    <h1>This is my JSX</h1>
    <p>Nguyen The Toan</p>
    <p>Age: 20</p>
    <p>Major: FER202</p>
    <p>My hobbies: 
      <ul>
        <li>Watching movies</li>
        <li>Playing video games</li>
        <li>Traveling</li>
        </ul> 
    </p>
    <div className="img-container">
      <img src={reactLogo} alt="Profile" style={{width: '100%', borderRadius: '12px'}} />
    </div>  
    </div>
    </>
  );
}

function App() {
  return (
    <>
    <Header/>
    </>
  );
}  
export default App;

