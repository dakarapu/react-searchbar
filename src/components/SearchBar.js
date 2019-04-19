import React from "react";
import searchPics from "./PictureLoader";
//import axios from "axios";
//import ListView from "./PictureLoader";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { term: "", results: [] };
  }

  async onFormSubmit(e) {
    e.preventDefault();
    console.log("SearchBar Comp:", this.state.term);
    //this.props.onSubmit(this.state.term);
    const pictures = await searchPics(this.state.term);
    this.setState({ results: pictures });
  }

  render() {
    let list = [];
    if (this.state.results.length > 0) {
      this.state.results.map(v => {
        return list.push(
          <div className={"card"} key={v.id}>
            <div className={"image"}>
              <img src={v.urls.thumb} alt={v.alt_description} />
            </div>
            <div className={"content"}>
              <a className={"header"} href={v.user.links.self}>
                {v.user.name}
              </a>
              <div className={"meta"}>
                <span className={"date"}>{v.updated_at}</span>
              </div>
              <div className={"description"}>{v.user.location}</div>
            </div>
            <div className={"extra content"}>
              <a href={v.links.self}>
                <i className={"thumbs up icon"} />
                {v.likes}
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <div className={"ui segment"}>
        <form onSubmit={this.onFormSubmit} className={"ui form"}>
          <div className={"field"}>
            <label>Image Search</label>
            <input
              type={"text"}
              placeholder={""}
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
          <div className={"ui cards"}>{list}</div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
