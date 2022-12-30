// USED PACKAGES
import React from 'react';
import classes from './App.module.css';
import { Redirect, Route, Switch } from 'react-router';

// USED PAGES
import Home from '../Pages/Home/Home';

// USED COMPONENTS
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Service from '../Pages/Service/Service';
import ContactUs from '../Pages/ContactUs/ContactUs';
import AboutUs from '../Pages/AboutUs/AboutUs';
import NewsCenter from '../Pages/NewsCenter/NewsCenter';
import Careers from '../Pages/Careers/Careers';
import Invest from '../Pages/Invest/Invest';

const App = () => {

    
    return (
        <div className={classes.MainLayout}>
            <Header />
            <div className={classes.Body}>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services/:service' component={Service} />
                    <Route path='/contact-us' component={ContactUs} />
                    <Route path='/about-us' component={AboutUs} />
                    <Route path='/news-center' component={NewsCenter} />
                    <Route path='/careers' component={Careers} />
                    <Route path='/invest' component={Invest} />
                    <Redirect to='/' />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default App
