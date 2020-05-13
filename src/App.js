import React from "react";
import Sidebar from "./layout/Sidebar";

import Home from "./pages/Home";

import AddAnnouncement from './pages/add/Announcement'
import AddAnswer from './pages/add/Answer'
import AddBulletin from './pages/add/Bulletin'
import AddComment from './pages/add/Comment'
import AddFeature from './pages/add/Feature'
import AddLandingPage from './pages/add/LandingPage'
import AddPage from './pages/add/Page'
import AddPost from './pages/add/Post'
import AddPriceTable from './pages/add/PriceTable'
import AddProduct from './pages/add/Product'
import AddReferance from './pages/add/Referance'
import AddScreenshot from './pages/add/Screenshot'

import EditMenu from './pages/edit/Menu'
import EditSettings from './pages/edit/Settings'

import ListAnnouncements from './pages/list/Announcements'
import ListAnswers from './pages/list/Answers'
import ListBulletins from './pages/list/Bulletins'
import ListCarousels from './pages/list/Carousels'
import ListComments from './pages/list/Comments'
import ListContactDetails from './pages/list/ContactDetails'
import ListContactForms from './pages/list/ContactForms'
import ListFeatures from './pages/list/Features'
import ListLandingPages from './pages/list/LandingPages'
import ListPages from './pages/list/Pages'
import ListPosts from "./pages/list/Posts";
import ListPriceTables from "./pages/list/PriceTables";
import ListProducts from "./pages/list/Products";
import ListReferances from "./pages/list/Referances";
import ListScreenshots from "./pages/list/Screenshots";
import ListSlides from "./pages/list/Slides";
import ListSocialAccounts from "./pages/list/SocialAccounts";
import ListSubscribers from './pages/list/Subscribers'

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/bootstrap.min.scss";
import "./assets/css/icons.scss";
import "./assets/css/metisMenu.min.scss";
import "./assets/css/style.scss";

function App() {
  return (
    <Router>
      <div id="wrapper" className="App">
        <Sidebar />
        <switch>
          <Route exact path="/" component={Home} />

           <Route exact path="/add/announcement" component={AddAnnouncement} />
           <Route exact path="/add/answer" component={AddAnswer} />
           <Route exact path="/add/bulletin" component={AddBulletin} />
           <Route exact path="/add/comment" component={AddComment} />
           <Route exact path="/add/feature" component={AddFeature} />
           <Route exact path="/add/landing-page" component={AddLandingPage} />
           <Route exact path="/add/page" component={AddPage} />
           <Route exact path="/add/post" component={AddPost} />
           <Route exact path="/add/price-table" component={AddPriceTable} />
           <Route exact path="/add/product" component={AddProduct} />
           <Route exact path="/add/referance" component={AddReferance} />
           <Route exact path="/add/screenshot" component={AddScreenshot} />

           <Route exact path="/edit/menu" component={EditMenu} />
           <Route exact path="/edit/settings" component={EditSettings} />

           <Route exact path="/list/announcements" component={ListAnnouncements} />
           <Route exact path="/list/answers" component={ListAnswers} />
           <Route exact path="/list/bulletins" component={ListBulletins} />  
           <Route exact path="/list/carousels" component={ListCarousels} />
           <Route exact path="/list/comments" component={ListComments} />
           <Route exact path="/list/contact-details" component={ListContactDetails} />
           <Route exact path="/list/contact-forms" component={ListContactForms} />
           <Route exact path="/list/features" component={ListFeatures} />
           <Route exact path="/list/landing-pages" component={ListLandingPages} />
           <Route exact path="/list/pages" component={ListPages} />
           <Route exact path="/list/posts" component={ListPosts} />
           <Route exact path="/list/price-tables" component={ListPriceTables} />
           <Route exact path="/list/products" component={ListProducts} />
           <Route exact path="/list/referances" component={ListReferances} />
           <Route exact path="/list/screenshots" component={ListScreenshots} />
           <Route exact path="/list/slides" component={ListSlides} />
           <Route exact path="/list/social-accounts" component={ListSocialAccounts} />
           <Route exact path="/list/subscribers" component={ListSubscribers} />

        </switch>
      </div>
    </Router>
  );
}

export default App;
