// import { Switch, Route } from 'react-router-dom';
import MyBookshelf from "./components/MyBookshelf";
// import GroupedByTags from "./components/GroupedByTags";
// import GroupedByStatus from "./components/GroupedByStatus";

function App() {
  return (    
    // <Switch>
    //   <Route exact path="/">
        <MyBookshelf />
    //   </Route>
    //   <Route exact path="/tags/:id">
    //     <GroupedByTags />
    //   </Route>
    //   <Route exact path="/status/:id">
    //     <GroupedByStatus />
    //   </Route>
    // </Switch>    
  );
}

export default App;
