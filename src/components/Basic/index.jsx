import React, { useEffect, useState } from "react";

import { AiOutlineHistory } from "react-icons/ai";
import { BsBackspace } from "react-icons/bs";

import * as Math from "./../../utils/Math";

import { Wrapper, Container, Header, Body, History } from "./styled";

const Basic = ({ state }) => {
  const [result, setResult] = useState("0");
  const [expressio, setExpression] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  const operators = ["+", "-", "*", "/", "."];

  const saveCalc = () => {
    setExpression(Math.calculate(expressio, result));
    setHistory([...history, `${expressio} = ${result}`]);
  };

  return (
    <>
      <Wrapper state={state}>
        <Container>
          <Header>
            <AiOutlineHistory
              onClick={() => setShowHistory(!showHistory)}
              className="icon"
            />
            <span className="expressio">{expressio || "0"}</span>
            <span className="result">= {result ? result : "0"}</span>
          </Header>

          <table>
            <Body>
              <tr>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      Math.update("(", expressio, setExpression, setResult)
                    }
                  >
                    (
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      Math.update(")", expressio, setExpression, setResult)
                    }
                  >
                    )
                  </button>
                </td>
                <td>
                  <button
                    id="operators"
                    type="button"
                    onClick={() =>
                      Math.update("%", expressio, setExpression, setResult)
                    }
                  >
                    %
                  </button>
                </td>
                <td>
                  <button
                    id="operators"
                    type="button"
                    onClick={() =>
                      Math.update("+", expressio, setExpression, setResult)
                    }
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("1", expressio, setExpression, setResult)
                    }
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("2", expressio, setExpression, setResult)
                    }
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("3", expressio, setExpression, setResult)
                    }
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    id="operators"
                    type="button"
                    onClick={() =>
                      Math.update("-", expressio, setExpression, setResult)
                    }
                  >
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("4", expressio, setExpression, setResult)
                    }
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("5", expressio, setExpression, setResult)
                    }
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("6", expressio, setExpression, setResult)
                    }
                  >
                    6
                  </button>
                </td>
                <td>
                  <button
                    id="operators"
                    type="button"
                    onClick={() =>
                      Math.update("*", expressio, setExpression, setResult)
                    }
                  >
                    x
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("7", expressio, setExpression, setResult)
                    }
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("8", expressio, setExpression, setResult)
                    }
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("9", expressio, setExpression, setResult)
                    }
                  >
                    9
                  </button>
                </td>
                <td>
                  <button
                    id="operators"
                    type="button"
                    onClick={() =>
                      Math.update("/", expressio, setExpression, setResult)
                    }
                  >
                    ÷
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="operators"
                    type="button"
                    onClick={() =>
                      Math.update(".", expressio, setExpression, setResult)
                    }
                  >
                    .
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() =>
                      Math.update("0", expressio, setExpression, setResult)
                    }
                  >
                    0
                  </button>
                </td>
                <td>
                  <button
                    className="delete"
                    type="button"
                    onClick={() =>
                      setExpression(Math.deleteLastItem(expressio, setResult))
                    }
                  >
                    <BsBackspace />
                  </button>
                </td>
                <td>
                  <button
                    className="igual"
                    type="button"
                    onClick={() => saveCalc()}
                  >
                    =
                  </button>
                </td>
              </tr>
            </Body>
          </table>
        </Container>

        <History showHistory={showHistory}>
          <h1>Historico</h1>
          {history.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </History>
      </Wrapper>
    </>
  );
};

export default Basic;
