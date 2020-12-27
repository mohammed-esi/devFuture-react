import React, {Fragment, useContext} from 'react'
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import EditProfileForm from '../profileForms/EditProfileForm'
import CreateProfileForm from '../profileForms/CreateProfileForm'
import AddEducation from '../profileForms/AddEducation'
import AddExpereince from '../profileForms/AddExperience'
import Profile from '../profile/Profile'
import Profiles from '../profiles/Profiles'
import ServicesPage from '../services/ServicesPage'
import Service from '../service/Service'
import CreateService from '../services/ServiceForm'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function RoutesUser() {
  return (
    <Fragment >
      <Navbar />
      <Switch>
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/service/:id' component={Service} />
        <PrivateRoute exact path='/create-service' component={CreateService}  />
        <PrivateRoute exact path='/edit-profile' component={EditProfileForm}  />
        <PrivateRoute exact path='/create-profile' component={CreateProfileForm}  />
        <PrivateRoute exact path='/edit-education' component={AddEducation}  />
        <PrivateRoute exact path='/edit-experience' component={AddExpereince}  />
      </Switch>
      <Footer />
    </Fragment>
  )
}
