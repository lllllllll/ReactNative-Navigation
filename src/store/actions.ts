import { get } from './services';
import types from './types';
import { user, userAll } from '../../constants';

export const fetchUser = () => (dispatch: any) => get(dispatch, types.getUsers, user);
export const fetchUserAll = () => (dispatch: any) => get(dispatch, types.getUserAll, userAll);