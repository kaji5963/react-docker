import { atom, RecoilState } from 'recoil';
import { User } from '../types/user/User';
import { recoilPersist } from 'recoil-persist';
import { AtomKeys } from './recoilKeys';

const { persistAtom } = recoilPersist();

export const authUserAtom: RecoilState<User> = atom({
  key: AtomKeys.AUTH_USER_ATOM,
  default: null,
  effects_UNSTABLE: [persistAtom],
});
