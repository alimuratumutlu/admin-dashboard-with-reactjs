import React, { Component } from './node_modules/react'

export default class Topbar extends Component {
  render() {
    return (
        <div className="topbar">

            <nav className="navbar-custom">

                <ul className="list-unstyled topbar-right-menu float-right mb-0">

                    <li className="hide-phone app-search">
                        <form>
                            <input type="text" placeholder="Search..." className="form-control"/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </li>

                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                            <i className="fi-bell noti-icon"></i>
                            <span className="badge badge-danger badge-pill noti-icon-badge">4</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">

                            <div className="dropdown-item noti-title">
                                <h5 className="m-0"><span className="float-right"><a href="" className="text-dark"><small>Clear All</small></a> </span>Notification</h5>
                            </div>

                            <div className="slimscroll" style={{maxHeight: 230}}>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-success"><i className="mdi mdi-comment-account-outline"></i></div>
                                    <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">1 min ago</small></p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-info"><i className="mdi mdi-account-plus"></i></div>
                                    <p className="notify-details">New user registered.<small className="text-muted">5 hours ago</small></p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-danger"><i className="mdi mdi-heart"></i></div>
                                    <p className="notify-details">Carlos Crouch liked <b>Admin</b><small className="text-muted">3 days ago</small></p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-warning"><i className="mdi mdi-comment-account-outline"></i></div>
                                    <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">4 days ago</small></p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-purple"><i className="mdi mdi-account-plus"></i></div>
                                    <p className="notify-details">New user registered.<small className="text-muted">7 days ago</small></p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon bg-custom"><i className="mdi mdi-heart"></i></div>
                                    <p className="notify-details">Carlos Crouch liked <b>Admin</b><small className="text-muted">13 days ago</small></p>
                                </a>
                            </div>

                            <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                                View all <i className="fi-arrow-right"></i>
                            </a>

                        </div>
                    </li>

                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                            <i className="fi-speech-bubble noti-icon"></i>
                            <span className="badge badge-custom badge-pill noti-icon-badge">6</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">

                            <div className="dropdown-item noti-title">
                                <h5 className="m-0"><span className="float-right"><a href="" className="text-dark"><small>Clear All</small></a> </span>Chat</h5>
                            </div>

                            <div className="slimscroll" style={{maxHeight: 230}}>
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="./images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Cristina Pride</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="./images/users/avatar-3.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Sam Garret</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="./images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Karen Robinson</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Wow that's great</p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="./images/users/avatar-5.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Sherry Marshall</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="notify-icon"><img src="./images/users/avatar-6.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                    <p className="notify-details">Shawn Millard</p>
                                    <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                                </a>
                            </div>

                            <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                                View all <i className="fi-arrow-right"></i>
                            </a>

                        </div>
                    </li>

                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle nav-user" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="false" aria-expanded="false">
                            <img src="./images/users/avatar-1.jpg" alt="user" className="rounded-circle"/> <span className="ml-1">Maxine K <i className="mdi mdi-chevron-down"></i> </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                            <div className="dropdown-item noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fi-head"></i> <span>My Account</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fi-cog"></i> <span>Settings</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fi-help"></i> <span>Support</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fi-lock"></i> <span>Lock Screen</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fi-power"></i> <span>Logout</span>
                            </a>

                        </div>
                    </li>

                </ul>

                <ul className="list-inline menu-left mb-0">
                    <li className="float-left">
                        <button className="button-menu-mobile open-left disable-btn">
                            <i className="dripicons-menu"></i>
                        </button>
                    </li>
                    <li>
                        <div className="page-title-box">
                            <h4 className="page-title">Dashboard </h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active">Welcome to Highdmin admin panel !</li>
                            </ol>
                        </div>
                    </li>

                </ul>

            </nav>

        </div>
    )
  }
}
