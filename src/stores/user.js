import { createStore } from 'harlem'

const STATE = {
  user: undefined,
  token: undefined
}

export const {
  state,
  mutations,
  getter
} = createStore(STATE)

export const user = getter('user', state => state.user)

export const token = getter('token', state => state.token)