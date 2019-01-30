import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ValidationForm from "./ValidationForm";
export default class Layout extends React.Component {
  render() {
    var myArr = [
      "Ibragimo Bakhodir",
      "Sam Smith",
      "Joe Han",
      "David Dem",
      "Kate Windston",
      "Lean Kingston",
      "Farrel Ferrari",
      "Zen Waste",
      "Ilona Unkey",
      "Adam Green",
      "Uno Dos",
      "Vila Jane",
      "Curly Curs",
      "Sander Monga"
    ];
    return (
      <div>
        <section>
          <Header header="Group 12C" />
        </section>
        <div>
          {myArr.map(arr => (
            <li>{arr}</li>
          ))}
        </div>
        <section>
          <ValidationForm />
        </section>
        <div>
          <Footer footer={this.props.footer} />
        </div>
      </div>
    );
  }
}
