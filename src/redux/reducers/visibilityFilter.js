import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";
// Initierar visibilityFilters till att alla todos ska visas
const initialState = VISIBILITY_FILTERS.ALL;

// Här sätts initierings state:t samt inväntan av action
const visibilityFilter = (state = initialState, action) => {
    // Denna reducer körs då action-type sätts till SET_FILTER
    switch (action.type) {
        // Denna uppdaterar filter-statet i store:n till det valda från VisibilityFilters
        // vilket dispatchar action.setFilter(currentFilter)
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;
