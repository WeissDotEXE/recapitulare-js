import * as actions from "./actionType";
let lastId = 0;

export default function reducer(state = [], action) {
  if (actions.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: actions.payload.description,
        resolve: false,
      },
    ];
  else if (actions.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id !== actions.payload.id);
  else if (actions.type === actions.BUG_RESOLVED)
    return state.map((bug) =>
      bug.id !== actions.payload.id ? bug : { ...bug, resolved: true }
    );
  return state;
}
