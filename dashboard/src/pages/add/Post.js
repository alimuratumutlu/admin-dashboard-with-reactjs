import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

import { connect } from "react-redux";

import * as ACTION_TYPES from "../../store/actions/action_types";
import * as ACTIONS from "../../store/actions/actions";

class AddPost extends Component {
  constructor(props) {
    super(props);
  }

  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
  };

  render() {
    const contentTitle = "Örnek Başlık";
    return (
      <div className="content-page">
        <Header />
        <div className="content">
          <div className="container-fluid">
            <div class="card-box">
              <h4>
                <input
                  type="text"
                  id="simpleinput"
                  class="form-control"
                  value={contentTitle}
                />
              </h4>
              <Editor
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                  plugins: "link image code",
                  toolbar:
                    "undo redo | bold italic | alignleft aligncenter alignright | code"
                }}
                onChange={this.handleEditorChange}
              />
              <button
                onClick={() => this.props.action_creator1(contentTitle)}
                type="button"
                class="btn btn-block btn-primary waves-effect waves-light mb-1"
              >
                YAZIYI KAYDET
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    content_title: state.post_reducer.content_title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action_creator1: text => dispatch(ACTIONS.content_title(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);
