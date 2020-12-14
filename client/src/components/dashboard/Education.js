import React, { Fragment, useContext } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import EducationItem from './EducatioinItem'


const Education = () => {
  const profileContext = useContext(ProfileContext)

  const { profile, loading } = profileContext;

  return (
    <Fragment>
      <div className='card px-2'>
        <div className='card-body'>
          <h3 className='my-4'>Education Credentials</h3>
          <div className='my-3'>
            <table className='table mr-4'>
              <thead>
                <tr>
                  <th scope='col'>Scool</th>
                  <th scope='col'>Degree</th>
                  <th scope='col'>Years</th>
                  <th scope='col' />
                </tr>
              </thead>
              <tbody>
                {profile && !loading && profile.education.length !== 0 ? (
                  profile.education.map((education) => ( <EducationItem key={education._id} education={education} /> ))
                ) : (
                  <tr className="text-center">
                    <td>/</td>
                    <td>/</td>
                    <td>/</td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Education;