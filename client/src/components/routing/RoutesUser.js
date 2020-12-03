import React, {Fragment} from 'react'
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ProfileForm from '../profileForms/ProfileForm'
import AddEducation from '../profileForms/AddEducation'
import AddExpereince from '../profileForms/AddExperience'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

export default function RoutesUser() {
  return (
    <Fragment >
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/create-profile' component={ProfileForm}  />
        <PrivateRoute exact path='/edit-education' component={AddEducation}  />
        <PrivateRoute exact path='/edit-experience' component={AddExpereince}  />
      </Switch>
      <Footer />
    </Fragment>
  )
}
