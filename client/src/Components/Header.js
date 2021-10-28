import React from 'react';
import './Header.css'




const Header = () => {
    return (

        <div className="">
            <nav class="navbar navbar-expand-lg pt-3 fixed-top">

                <div className="d-flex">
                    <a href="/" class="navbar-brand" id="navigation">ToDoList</a>

                    <div class="collapse navbar-collapse" id="">
                        <ul class="navbar-nav ms-auto" id="link">
                            <li class="nav-item">
                                <a href="/signup" class="nav-link" id="navigation1">Sign Up</a>
                            </li>
                            <li class="nav-item">
                                <a href="/login" class="nav-link" id="navigation2">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </div>

    );
}

export default Header