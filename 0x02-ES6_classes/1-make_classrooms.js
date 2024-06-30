import ClassRoom from './0-classroom';

/**
 * creates classroom objects
 * Return: array of classroom objects
*/

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
