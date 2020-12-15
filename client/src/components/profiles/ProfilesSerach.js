import React, { useContext, useRef, useEffect } from 'react'
import ProfileContext from '../../context/profile/profileContext'

const ProfilesSerach = () => {
  const profileContext = useContext(ProfileContext)

  const {filtered, filterProfiles, clearFilter} = profileContext

  const text = useRef('')

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterProfiles(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <h1><i className="fas fa-terminal mr-3" /> Developers</h1>
      </div>
      <div className="col-md-4 offset-md-4">
        <div className="form-group">
          <div className="d-flex">
            <input className="form-control" type="text" ref={text} onChange={onChange} placeholder="search ..." /> <i className="fas fa-search ml-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilesSerach
