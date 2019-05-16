import React, { Component } from "react";
import Logo from "./Logo";
import HelloUser from "./HelloUser";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="left side-menu">
        <div
          className="slimScrollDiv mm-active"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "auto",
            height: 907
          }}
        >
          <div
            className="slimscroll-menu mm-show"
            id="remove-scroll"
            style={{ overflow: "hidden", width: "auto", height: 907 }}
          >
            <Logo />

            <HelloUser />

            <div id="sidebar-menu" className="mm-active">
              <ul className="metismenu mm-show" id="side-menu">
                <li className="mm-active">
                  <a href="index.html" className="mm-active">
                    <i className="fi-air-play" />
                    <span className="badge badge-danger badge-pill float-right">
                      7
                    </span>{" "}
                    <span> Dashboard </span>
                  </a>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-layers" /> <span> Apps </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="apps-calendar.html">Calendar</a>
                    </li>
                    <li>
                      <a href="apps-tickets.html">Tickets</a>
                    </li>
                    <li>
                      <a href="apps-taskboard.html">Task Board</a>
                    </li>
                    <li>
                      <a href="apps-task-detail.html">Task Detail</a>
                    </li>
                    <li>
                      <a href="apps-contacts.html">Contacts</a>
                    </li>
                    <li>
                      <a href="apps-projects.html">Projects</a>
                    </li>
                    <li>
                      <a href="apps-companies.html">Companies</a>
                    </li>
                    <li>
                      <a href="apps-file-manager.html">File Manager</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-mail" />
                    <span> Email </span> <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="email-inbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="email-read.html">Read Email</a>
                    </li>
                    <li>
                      <a href="email-compose.html">Compose Email</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-layout" />
                    <span> Layouts </span> <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="layouts-menucollapsed.html">Menu Collapsed</a>
                    </li>
                    <li>
                      <a href="layouts-small-menu.html">Small Menu</a>
                    </li>
                    <li>
                      <a href="layouts-dark-lefbar.html">Dark Leftbar</a>
                    </li>
                    <li>
                      <a href="layouts-center-logo.html">Center Logo</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-briefcase" /> <span> UI Elements </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="ui-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="ui-cards.html">Cards</a>
                    </li>
                    <li>
                      <a href="ui-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="ui-modals.html">Modals</a>
                    </li>
                    <li>
                      <a href="ui-spinners.html">Spinners</a>
                    </li>
                    <li>
                      <a href="ui-ribbons.html">Ribbons</a>
                    </li>
                    <li>
                      <a href="ui-tooltips-popovers.html">
                        Tooltips &amp; Popover
                      </a>
                    </li>
                    <li>
                      <a href="ui-checkbox-radio.html">Checkboxs-Radios</a>
                    </li>
                    <li>
                      <a href="ui-tabs.html">Tabs</a>
                    </li>
                    <li>
                      <a href="ui-progressbars.html">Progress Bars</a>
                    </li>
                    <li>
                      <a href="ui-notifications.html">Notification</a>
                    </li>
                    <li>
                      <a href="ui-grid.html">Grid</a>
                    </li>
                    <li>
                      <a href="ui-sweet-alert.html">Sweet Alert</a>
                    </li>
                    <li>
                      <a href="ui-bootstrap.html">Bootstrap UI</a>
                    </li>
                    <li>
                      <a href="ui-range-slider.html">Range Slider</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="widgets.html">
                    <i className="fi-command" /> <span> Widgets </span>
                  </a>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-bar-graph-2" />
                    <span> Charts </span> <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="chart-flot.html">Flot Chart</a>
                    </li>
                    <li>
                      <a href="chart-morris.html">Morris Chart</a>
                    </li>
                    <li>
                      <a href="chart-google.html">Google Chart</a>
                    </li>
                    <li>
                      <a href="chart-chartist.html">Chartist Chart</a>
                    </li>
                    <li>
                      <a href="chart-chartjs.html">Chartjs Chart</a>
                    </li>
                    <li>
                      <a href="chart-sparkline.html">Sparkline Chart</a>
                    </li>
                    <li>
                      <a href="chart-knob.html">Jquery Knob</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-disc" />
                    <span className="badge badge-info badge-pill float-right">
                      10
                    </span>{" "}
                    <span> Forms </span>
                  </a>

                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="form-elements.html">Form Elements</a>
                    </li>
                    <li>
                      <a href="form-advanced.html">Form Advanced</a>
                    </li>
                    <li>
                      <a href="form-validation.html">Form Validation</a>
                    </li>
                    <li>
                      <a href="form-pickers.html">Form Pickers</a>
                    </li>
                    <li>
                      <a href="form-wizard.html">Form Wizard</a>
                    </li>
                    <li>
                      <a href="form-mask.html">Form Masks</a>
                    </li>
                    <li>
                      <a href="form-summernote.html">Summernote</a>
                    </li>
                    <li>
                      <a href="form-wysiwig.html">Wysiwig Editors</a>
                    </li>
                    <li>
                      <a href="form-x-editable.html">X Editable</a>
                    </li>
                    <li>
                      <a href="form-uploads.html">Multiple File Upload</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-box" />
                    <span> Icons </span> <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="icons-materialdesign.html">Material Design</a>
                    </li>
                    <li>
                      <a href="icons-dripicons.html">Dripicons</a>
                    </li>
                    <li>
                      <a href="icons-fontawesome.html">Font awesome</a>
                    </li>
                    <li>
                      <a href="icons-feather.html">Feather Icons</a>
                    </li>
                    <li>
                      <a href="icons-simpleline.html">Simple Line Icons</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-paper" /> <span> Tables </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="tables-basic.html">Basic Tables</a>
                    </li>
                    <li>
                      <a href="tables-datatable.html">Data Tables</a>
                    </li>
                    <li>
                      <a href="tables-responsive.html">Responsive Table</a>
                    </li>
                    <li>
                      <a href="tables-tablesaw.html">Tablesaw Tables</a>
                    </li>
                    <li>
                      <a href="tables-foo.html">Foo Tables</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-title">More</li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-location-2" /> <span> Maps </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="maps-google.html">Google Maps</a>
                    </li>
                    <li>
                      <a href="maps-vector.html">Vector Maps</a>
                    </li>
                    <li>
                      <a href="maps-mapael.html">Mapael Maps</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-paper-stack" />
                    <span> Pages </span> <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="page-starter.html">Starter Page</a>
                    </li>
                    <li>
                      <a href="page-login.html">Login</a>
                    </li>
                    <li>
                      <a href="page-register.html">Register</a>
                    </li>
                    <li>
                      <a href="page-logout.html">Logout</a>
                    </li>
                    <li>
                      <a href="page-recoverpw.html">Recover Password</a>
                    </li>
                    <li>
                      <a href="page-lock-screen.html">Lock Screen</a>
                    </li>
                    <li>
                      <a href="page-confirm-mail.html">Confirm Mail</a>
                    </li>
                    <li>
                      <a href="page-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="page-404-alt.html">Error 404-alt</a>
                    </li>
                    <li>
                      <a href="page-500.html">Error 500</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript:void(0);">
                    <i className="fi-marquee-plus" />
                    <span className="badge badge-success float-right">
                      Hot
                    </span>{" "}
                    <span> Extra Pages </span>
                  </a>
                  <ul
                    className="nav-second-level mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="extras-timeline.html">Timeline</a>
                    </li>
                    <li>
                      <a href="extras-profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="extras-invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="extras-faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="extras-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="extras-email-template.html">Email Templates</a>
                    </li>
                    <li>
                      <a href="extras-ratings.html">Ratings</a>
                    </li>
                    <li>
                      <a href="extras-search-results.html">Search Results</a>
                    </li>
                    <li>
                      <a href="extras-gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="extras-maintenance.html">Maintenance</a>
                    </li>
                    <li>
                      <a href="extras-coming-soon.html">Coming Soon</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript: void(0);">
                    <i className="fi-share" /> <span> Multi Level </span>{" "}
                    <span className="menu-arrow" />
                  </a>
                  <ul
                    className="nav-second-level nav mm-collapse"
                    aria-expanded="false"
                  >
                    <li>
                      <a href="javascript: void(0);">Level 1.1</a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" aria-expanded="false">
                        Level 1.2 <span className="menu-arrow" />
                      </a>
                      <ul
                        className="nav-third-level nav mm-collapse"
                        aria-expanded="false"
                      >
                        <li>
                          <a href="javascript: void(0);">Level 2.1</a>
                        </li>
                        <li>
                          <a href="javascript: void(0);">Level 2.2</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="clearfix" />
          </div>
          <div
            className="slimScrollBar"
            style={{
              background: "rgb(158, 165, 171)",
              width: 8,
              position: "absolute",
              top: 0,
              opacity: 0.4,
              display: "none",
              borderRadius: 7,
              zIndex: 99,
              right: 1,
              height: 838.582
            }}
          />

          <div
            className="slimScrollRail"
            style={{
              width: 8,
              height: "100%",
              position: "absolute",
              top: 0,
              display: "none",
              borderRadius: 7,
              background: "rgb(51, 51, 51)",
              opacity: 0.2,
              zIndex: 90,
              right: 1
            }}
          />
        </div>
      </div>
    );
  }
}
