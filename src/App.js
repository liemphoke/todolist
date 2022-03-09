import "./App.css";
import { useState } from "react";
import moment from "moment";

function App() {
  const [textInput, setTextInput] = useState("");
  const [content, setContent] = useState({
    todos: {
      key: "todos",
      tickets: [
        {
          id: Math.random() + Math.random(),
          text: "lam viec",
          createdDate: moment().format("YYYY-MM-DD"),
          currentColumnKey: "todos",
        },
        {
          id: Math.random() + Math.random(),
          text: "lam viec 2",
          createdDate: moment().format("YYYY-MM-DD"),
          currentColumnKey: "todos",
        },
      ],
    },
    inProgress: {
      key: "in-progress",
      tickets: [],
    },
    done: {
      key: "done",
      tickets: [],
    },
    needReview: {
      key: "need-review",
      tickets: [],
    },
  });

  const addTodo = () => {
    const newContent = { ...content };
    newContent["todos"].tickets.push({
      id: Math.random() + Math.random(),
      text: textInput,
      createdDate: moment().format("YYYY-MM-DD"),
      currentColumnKey: "todos",
    });
    setContent(newContent);
  };

  const handleColumnChange = (currentColumnkey, targetColumnKey, id) => {
    console.log(currentColumnkey, targetColumnKey, id);

    const findIndex = content[currentColumnkey].tickets.findIndex(
      (element) => element.id === id
    );
    const item = content[currentColumnkey].tickets.splice(findIndex, 1)[0];
    console.log(item);
    item.currentColumnKey = targetColumnKey;
    const newContent = { ...content };
    newContent[targetColumnKey].tickets.push(item);
    setContent(newContent);
  };

  return (
    <div className="App">
      <input
        type="text"
        id="fname"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        name="fname"
      />
      <button onClick={addTodo}>ADD TODO</button>
      <table>
        <tr>
          <th>{content["todos"].key}</th>
          <th>{content["inProgress"].key}</th>
          <th>{content["done"].key}</th>
          <th>{content["needReview"].key}</th>
        </tr>
        <tr>
          <td>
            {content["todos"].tickets.map((element) => (
              <div className="todoItem">
                <span>{element.text}</span>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "inProgress",
                      element.id
                    )
                  }
                >
                  move to In Progress
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "done",
                      element.id
                    )
                  }
                >
                  move to Done
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "needReview",
                      element.id
                    )
                  }
                >
                  move to Need Review
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "delete",
                      element.id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </td>
          <td>
            {content["inProgress"].tickets.map((element) => (
              <div className="todoItem">
                <span>{element.text}</span>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "inProgress",
                      element.id
                    )
                  }
                >
                  move to In Progress
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "done",
                      element.id
                    )
                  }
                >
                  move to Done
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "needReview",
                      element.id
                    )
                  }
                >
                  move to Need Review
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "delete",
                      element.id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </td>
          <td>
            {content["done"].tickets.map((element) => (
              <div className="todoItem">
                <span>{element.text}</span>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "inProgress",
                      element.id
                    )
                  }
                >
                  move to In Progress
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "done",
                      element.id
                    )
                  }
                >
                  move to Done
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "needReview",
                      element.id
                    )
                  }
                >
                  move to Need Review
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "delete",
                      element.id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </td>
          <td>
            {content["needReview"].tickets.map((element) => (
              <div className="todoItem">
                <span>{element.text}</span>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "inProgress",
                      element.id
                    )
                  }
                >
                  move to In Progress
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "done",
                      element.id
                    )
                  }
                >
                  move to Done
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "needReview",
                      element.id
                    )
                  }
                >
                  move to Need Review
                </button>
                <button
                  onClick={() =>
                    handleColumnChange(
                      element.currentColumnKey,
                      "delete",
                      element.id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            ))}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
