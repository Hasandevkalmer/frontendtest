import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import HomePage from './HomePage'

import logo from '../assets/img/img-brand-logo.png'
import logoWhite from '../assets/img/img-brand-logo-white.png'
import facebookIcon from '../assets/img/img-icon-facebook.svg'

function App() {
    const socialMedia = [facebookIcon, facebookIcon, facebookIcon, facebookIcon, facebookIcon, facebookIcon]
    return (
        <Router>
            <div className="overflow-x-hidden min-h-screen">
                <Navbar logo={logo} />
                <Switch>
                    <Route exact path="/technical-test-frontend">
                        <HomePage logo={logoWhite} socialMedia={socialMedia} />
                    </Route>
                </Switch>
                <footer className="bg-[#062043] text-center py-6 text-gray-300 text-xs">
                    <span>Copyright © 2020 PT. Digital Medika Informatik. All rights reserved.</span>
                </footer>
            </div>
        </Router>
    )
}

export default App;