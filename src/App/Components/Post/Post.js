import { PureComponent } from "react";
import Pagination from "../pagination/Pagination";
import Section from "../section";

export default class Post extends PureComponent {
  state = {
    posts: [],
    loading: true,
  };

  getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };

  setPosts = async () => {
    this.state.posts = await this.getPosts();
    this.state.loading = false;
    console.log(...this.state.posts);
    this.setState({ ...this.state.posts });
  };

  componentDidMount() {
    this.setPosts();
  }

  render() {
    return (
      <Section heading="Posts">
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-3 mt-4">
          {this.state.loading
            ? "Loading..."
            : this.state.posts.map((post, index) => {
                return (
                  <SinglePost title={post.title} body={post.body} key={index} />
                );
              })}
        </div>
        <Pagination />
      </Section>
    );
  }
}

class SinglePost extends PureComponent {
  render() {
    return (
      <div className="post-card">
        <h1 className="font-semibold truncate">{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
