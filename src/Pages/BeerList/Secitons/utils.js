import { localWorker } from 'utils';
import { LS_KEY } from 'utils/constatns';

export const setLocalItemList = data => {
  const key = LS_KEY.selected_beer;
  let original = localWorker.getItem(key);
  if (!original || !original.length) {
    localWorker.setItem(key, [data]);
    return;
  }
  localWorker.setItem(key, [...original, data]);
};
export const findLocalItemById = id => {
  const original = localWorker.getItem(LS_KEY.selected_beer);
  if (!original || !original.length) return false;
  const count = original.filter(ele => ele.id === id).length;
  return Boolean(count);
};
export const deleteLocalItemById = id => {
  const key = LS_KEY.selected_beer;
  const original = localWorker.getItem(key).filter(ele => ele.id !== id);
  localWorker.setItem(key, [...original]);
};
