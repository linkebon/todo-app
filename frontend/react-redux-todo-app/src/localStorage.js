
export const loadState = () => {
  try {
      const serializedState = localStorage.getItem("todoAppState");
      if(serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState)
  } catch(err) {
      console.log("Error loading state..");
      return undefined;
  }
};

export const saveState = (state) => {
  try  {
      const stateAsString = JSON.stringify(state);
      localStorage.setItem("todoAppState", stateAsString)
  }catch(err) {
      console.log("Error saving state..");
  }
};