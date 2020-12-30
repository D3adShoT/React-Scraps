import logo from './logo.svg';
import './App.css';
// import Message from './Components/Message'
// import Counter from './Components/Counter'
// import EventHandlers from './Components/EventHandlers'
// import ReactList from './Components/ReactList'
// import ParentComp from './Components/Context/ParentComp';
// import {UserProvider} from './Components/Context/UserContext';
import Postform from './Components/httpReq/Postform';
// import Postlist from './Components/httpReq/Postlist';
function App() {
  return (
    <div className="App">
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <EventHandlers /> */}
      {/* <ReactList /> */}

      {/* if we will not enter UserProvider tag then it will grab the default value of the Context */}
      {/* <UserProvider value = 'Hello Son'>
      <ParentComp/>
      </UserProvider> */}
      {/* <Postlist /> */}
      <Postform />
    </div>
  );
}

export default App;
