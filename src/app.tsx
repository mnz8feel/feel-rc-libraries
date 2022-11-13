import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export function rootContainer(container) {
  return <DndProvider backend={HTML5Backend}>{container}</DndProvider>;
}
