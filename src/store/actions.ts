import { get } from './services';
import types from './types';

const urlUser = 'https://api.github.com/users/lllllllll';
export const fetchUser = () => (dispatch: any) => get(dispatch, types.getUsers, urlUser);
const urlAllUser = 'https://api.github.com/users';
export const fetchUserAll = () => (dispatch: any) => get(dispatch, types.getUserAll, urlAllUser);