import { User } from '../types/user/User';
import { AtomKeys } from './recoilKeys';

import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const authUserAtom: RecoilState<User> = atom({
  key: AtomKeys.AUTH_USER_ATOM,
  default: {
    id: null,
    name: '',
    age: '',
    imageUrl: '',
    email: '',
    is_admin: false,
    token: '',
    created_at: '',
    updated_at: '',
  },
  effects_UNSTABLE: [persistAtom],
});
