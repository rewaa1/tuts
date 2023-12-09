import logo from './logo.svg';
import './App.css';
import PostList from './Components/PostList';
import CreatePost from './Components/CreatePost';

function App() {
  return (
    <div className="App">
      <CreatePost/>
      <PostList/>
    </div>
  );
}

export default App;
