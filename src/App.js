//EX1


// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//       THIS IS THE ABOUT PAGE WONT DISPLAY ON OTHER PATHS
//     </div>
//   );
// }

// function Users() {
//   return <h2>Users</h2>;
// }


//EX2


// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";


// export default function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/users">
//           <Users />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//       <ul>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/users">Users</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//       <Link to="/">go back</Link>
//     </div>
//   );
// }

// function Users() {
//   return (
//     <div>
//       <h2>Users</h2>
//       <Link to="/">go back</Link>
//     </div>
//   );
// }


// EX3


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import './App.css'


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  let history = useHistory();
  return (
    <div>
      <h2>Home</h2>
        <button onClick={() => history.push('/about')}>About</button>
        <button onClick={() => history.push('/users')}>Users</button>
        <div className="clickableDiv" onClick={() => history.push('/users')}>
        </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <Link to="/">go back</Link>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <Link to="/">go back</Link>
    </div>
  );
}