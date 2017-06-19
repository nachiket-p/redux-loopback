import LoopbackRedux from 'redux-loopback';

const loopbackRedux = new LoopbackRedux({
  basePath: 'http://localhost:3000/api',
  models: [{ modelName: 'todos' }, { modelName: 'users' },]
})

export const loopbackReducer = loopbackRedux.reducer
export const loopbackMiddleware = loopbackRedux.loopback

export const todoActions = loopbackRedux.createActions('todos')
export const userActions = loopbackRedux.createActions('users')