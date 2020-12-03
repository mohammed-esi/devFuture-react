import React from 'react'

export default function Education() {
  return (
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
              <tr>
              <td>Null</td>
              <td>Null</td>
                {/* <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td> */}
                <td>
                  {/* <button className='btn btn-card btn-lg'>
                    <i className='fas fa-trash mr-2' />
                    Delete
                  </button> */}
                </td>
              </tr>
              {/* <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>
                  <button className='btn btn-card btn-lg'>
                    <i className='fas fa-trash mr-2' />
                    Delete
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
