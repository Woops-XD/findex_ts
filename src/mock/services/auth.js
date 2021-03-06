import Mock from 'mockjs2'
import { builder, getBody } from '../util'


const login = (options) => {
  const body = getBody(options)
  console.log('mock: body', body)
  if (body.username=="" || body.password=="") {
    return builder({ isLogin: true }, 'Username or password is not correct', 401)
  }

  return builder({
    'id': Mock.mock('@guid'),
    'name': "interviewer "+body.username,
    'username': 'admin',
    'password': '',
    'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
    'status': 1,
    'telephone': '',
    'lastLoginIp': '27.154.74.117',
    'lastLoginTime': 1534837621348,
    'creatorId': 'admin',
    'createTime': 1497160610259,
    'deleted': 0,
    'roleId': 'admin',
    'token': '4291d7da9005377ec9aec4a71ea837f'
  }, '', 200, { 'Custom-Header': Mock.mock('@guid') })
}

const logout = () => {
  return builder({}, 'logout')
}

Mock.mock(/\/auth\/login/, 'post', login)
Mock.mock(/\/auth\/logout/, 'post', logout)

