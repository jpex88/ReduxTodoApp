import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

// Tar emot activeFilterProps från Store samt sätter vilket nytt filter som önskas
const VisibilityFilters = ({ activeFilter, setFilter }) => {
    // Mappar upp de filter som finns som "knappar" och sätter dessa till nycklar
    // sedan dispatchar den ifall användaren väljer ett annat filter
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
            {currentFilter}
          </span>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};
// connectar först states:en till props från store och sedan dispatchar den vidare ifall
// ett nytt filter har valts med setFilter. Vidare exporterar den även komponenten.
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);