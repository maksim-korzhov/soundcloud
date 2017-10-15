import PropTypes from "prop-types";
import React, { Component } from "react";

import NavContainer from "../containers/NavContainer";

// Объявляем свойства
/*const propTypes = {
    initAuth: PropTypes.func.isRequired,
    initEnvironment: PropTypes.func.isRequired,
    initRouter: PropTypes.func.isRequired,
    paths: PropTypes.arrayOf(PropTypes.string).isRequired,
    router: PropTypes.shape({
        keys: PropTypes.shape({}),
        options: PropTypes.shape({}),
        path: PropTypes.string
    }).isRequired,
    routes: PropTypes.shape({}).isRequired,
};*/

class Root extends Component {
    render() {
        return (
            <div>
                <NavContainer />
            </div>
        );
    }
}

//Root.propTypes = propTypes;

export default Root;