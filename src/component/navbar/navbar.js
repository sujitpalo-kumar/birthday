import React, {Fragment} from "react";

class Navbar extends React.Component{
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-dark bg-success navbar-expand-sm">
                  
                    <ul className="text-white row animated slideInLeft 1s">
                        <li>Things are never quite as scary when you’ve got a best friend</li>
                        <li> “A real friend is one who walks in when the rest of the world walks out.” — Walter Winchell</li>
                    </ul>
                </nav>
            </Fragment>
        );
    }
}
export default Navbar;
