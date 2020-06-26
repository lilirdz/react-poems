import React from "react";
import poems from "./poems.json";
import { PoemForm } from "./PoemForm";
import { PoemList } from "./PoemList";

class App extends React.Component {
  state = {
    poems: poems,
  };

  deletePoem = (obj) => {
    this.setState({
      poems: this.state.poems.filter((poem) => poem !== obj),
    });
  };

  editPoem = (poemObj, poemContent) => {
    poemObj.content = poemContent;
    // console.log(poemContent);
    // console.log(poemObj);

    this.setState(
      {
        poems: this.state.poems.map((poem) =>
          poem.id === poemObj.id ? poemObj : poem
        ),
      }
      // () => console.log(this.state)
    );
  };

  createPoems = (name, content) => {
    this.setState({
      poems: [...poems, { name: name, content: content }],
    });
  };

  render() {
    return (
      <div className="ui container">
        <PoemForm poemList={this.state.poems} createPoem={this.createPoems} />
        <PoemList
          poemList={this.state.poems}
          deletePoem={this.deletePoem}
          editPoem={this.editPoem}
        />
      </div>
    );
  }
}

export default App;
