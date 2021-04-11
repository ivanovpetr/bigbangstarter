import { createStore } from 'vuex'

import account, { AccountState } from './modules/account';

export interface RootState {
  account: AccountState;
}

const store =  createStore({
  modules: {
    account,
  },
})

export default store
