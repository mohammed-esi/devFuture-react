import React, {Fragment} from 'react'
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import EditProfileForm from '../profileForms/EditProfileForm'
import CreateProfileForm from '../profileForms/CreateProfileForm'
import AddEducation from '../profileForms/AddEducation'
import AddExpereince from '../profileForms/AddExperience'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function RoutesUser() {
  return (
    <Fragment >
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/edit-profile' component={EditProfileForm}  />
        <PrivateRoute exact path='/create-profile' component={CreateProfileForm}  />
        <PrivateRoute exact path='/edit-education' component={AddEducation}  />
        <PrivateRoute exact path='/edit-experience' component={AddExpereince}  />
      </Switch>
      <Footer />
    </Fragment>
  )
}
