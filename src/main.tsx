// Updated routing for GitHub Pages

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
    return (
        <Router basename="/kloak-bore">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}

export default App;