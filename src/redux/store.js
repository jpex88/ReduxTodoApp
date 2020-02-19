import { createStore } from "redux";
import rootReducer from "./reducers";

// Skapar storen för redux som hänvisare vidare till reducers/index-filen som har bundit samman alla reducers.
export default createStore(rootReducer);
