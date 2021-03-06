import * as Random from 'expo-random';

export function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ Random.getRandomBytes(1)[0] & 15 >> c / 4).toString(16)
  );
}