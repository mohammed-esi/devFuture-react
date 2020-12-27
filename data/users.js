const bcrypt = require('bcryptjs')

const users = [
  {
    firstName: 'Joe',
    lastName: 'Joenthen',
    username: 'joe',
    avatar: 'https://source.unsplash.com/d2MSDujJl2g/700*400',
    email: 'joe@gmail.com',
    password: bcrypt.hashSync('mohammed', 10),
  },
  {
    firstName: 'Sider',
    lastName: 'Rojer',
    username: 'sider',
    avatar: 'https://source.unsplash.com/sibVwORYqs0/700*400',
    email: 'sider@gmail.com',
    password: bcrypt.hashSync('mohammed', 10),
  },
  {
    firstName: 'Sophia',
    lastName: 'Elijah',
    username: 'elijah',
    avatar: 'https://source.unsplash.com/W7b3eDUb_2I/700*400',
    email: 'sophia@gmail.com',
    password: bcrypt.hashSync('mohammed', 10),
  },
  {
    firstName: 'Kaylee',
    lastName: 'Robert',
    username: 'kaylee',
    avatar: 'https://source.unsplash.com/uJ8LNVCBjFQ/700*400',
    email: 'kaylee@gmail.com',
    password: bcrypt.hashSync('mohammed', 10),
  },
  {
    firstName: 'Liam',
    lastName: 'Andrew',
    username: 'liam',
    avatar: 'https://source.unsplash.com/k6aQzmIbR1s/700*400',
    email: 'liam@gmail.com',
    password: bcrypt.hashSync('mohammed', 10),
  },
]

module.exports = users