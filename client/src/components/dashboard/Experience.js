import React, { Fragment, useContext } from 'react'
import ProfileContext from '../../context/profile/profileContext'
import ExperienceItem from './ExperienceItem'

export default function Experience() {
  const profileContext = useContext(ProfileContext)

  const { profile, loading } = profileContext;


  return (
    <Fragment>
      <div className='card px-2'>
      <div className='card-body'>
        <h3 className='my-4'>Experience Credentials</h3>
        <div className='my-3'>
          <table className='table mr-4'>
            <thead>
              <tr>
                <th scope='col'>Company</th>
                <th scope='col'>Title</th>
                <th scope='col'>Years</th>
                <th scope='col' />
              </tr>
            </thead>
            <tbody>
            {profile && !loading && profile.experience.length !== 0 ? (
              profile.experience.map((experience) => ( <ExperienceItem experience={experience} /> ))
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
