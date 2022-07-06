import { PureComponent } from "react";

export default class Section extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="py-4 container mx-auto">
        <h1 className="text-center font-bold text-3xl">{this.props.heading}</h1>
        {this.props.children}
      </section>
    );
  }
}
