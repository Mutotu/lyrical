import React, { Component } from "react";
import gql from "graphql-tag";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>HHH!!</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>
            Song title:
            <input
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
            />
          </label>
        </form>
      </div>
    );
  }
}

const mutation = gql`
    mutation {
        addSong(title: )
    }
`;

export default SongCreate;
