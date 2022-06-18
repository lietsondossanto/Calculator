import React, { useState } from "react";

import { AiOutlineHistory } from "react-icons/ai";
import { BsBackspace } from "react-icons/bs";

import * as Math from "./../../utils/Math";

import { Wrapper, Container, Header, Body } from "./styled";

const Advanced = ({ state }) => {
  const [result, setResult] = useState("0");
  const [expressio, setExpression] = useState("");

  const operators = ["+", "-", "*", "/", "."];

  const validation = (value) => {
    if (expressio.split("").reverse()[0] != "%") {
      switch (value) {
        case "%":
          if (expressio == 0) return;
          if (expressio.split("").reverse()[0] == ")") {
            setExpression(expressio.slice(0, -1) + value + ")");
          } else {
            setExpression(expressio + value);
            setResult(Math.percentage(expressio).toString());
          }
          break;
        case "√":
          setExpression(`${value}()`);
          break;
        case "π":
          if (
            expressio.split("").reverse()[0] == "e" ||
            expressio.split("").reverse()[0] == "π"
          ) {
            setExpression(expressio + " x " + "π");
          } else {
            setExpression(expressio + "π");
          }
          break;
        case "e":
          if (
            expressio.split("").reverse()[0] == "π" ||
            expressio.split("").reverse()[0] == "e"
          ) {
            setExpression(expressio + " x " + "e");
          } else {
            setExpression(expressio + "e");
          }
          break;
        default:
          setResult("0");
      }
    } else {
      return;
    }
  };

  return (
    <>
      <Wrapper state={state}>
        <Container>
          <Header>
            <AiOutlineHistory className="icon" />
            <span className="expressio">{expressio || "0"}</span>
            <span className="result">= {result ? result : "0"}</span>
          </Header>

          <table>
            <Body>
              <tr>
                <td>
                  <button type="button">
                    <span>
                      x<sup>2</sup>
                    </span>
                  </button>
                </td>
                <td>
                  <button type="button">
                    <span>
                      x<sup>3</sup>
                    </span>
                  </button>
                </td>
                <td>
                  <button type="button">
                    <span>
                      x<sup>y</sup>
                    </span>
                  </button>
                </td>
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
                    onClick={() => validation("%")}
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
                  <button type="button" onClick={() => validation("π")}>
                    π
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => validation("e")}>
                    e
                  </button>
                </td>
                <td>
                  <button type="button">
                    <span>
                      e<sup>x</sup>
                    </span>
                  </button>
                </td>
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
                  <button type="button" onClick={() => validation("√")}>
                    √
                  </button>
                </td>
                <td>
                  <button type="button">
                    <span>
                      <sup>x</sup>√y
                    </span>
                  </button>
                </td>
                <td>
                  <button type="button">x!</button>
                </td>
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
                  <button type="button">sin</button>
                </td>
                <td>
                  <button type="button">cos</button>
                </td>
                <td>
                  <button type="button">tan</button>
                </td>
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
                  <button type="button">log</button>
                </td>
                <td>
                  <button type="button">ln</button>
                </td>
                <td>
                  <button type="button">EXP</button>
                </td>
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
                    onClick={() =>
                      setExpression(Math.calculate(expressio, result))
                    }
                  >
                    =
                  </button>
                </td>
              </tr>
            </Body>
          </table>
        </Container>
      </Wrapper>
    </>
  );
};

export default Advanced;
