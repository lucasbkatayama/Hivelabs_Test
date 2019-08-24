import { CHANGE_TEXT } from './types';

export const textChanged = ({ prop, value }) => {
  return {
    type: CHANGE_TEXT,
    payload: { prop, value }
  };
};
