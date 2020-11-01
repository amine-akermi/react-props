import './App.css';
import Profile from './profile/profile';
import pic from './assets/img/pic.jfif'

function App() {
  return (
    <div className="App">
      <Profile fullname="Amine Akermi" bio="Web Developer" profession="Web Developer" image={pic}/>
    </div>
  );
}

export default App;
