import PropTypes from "prop-types";
import React from "react";
import Link from "../components/Link"

import { SONGS_PATH } from "../constants/RouterConstants";

const Nav = (
    navigateTo
) => (
    <div className="nav">
        <div className="nav__inner container">
            <div className="nav__section">
                <i className="nav__logo__icon ios-radio-waves" />
                <Link
                    className="nav__logo__text"
                    navigateTo={navigateTo}
                    path={SONGS_PATH}
                >
                    SoundRedux
                </Link>
            </div>
        </div>
    </div>
);

export default Nav;
