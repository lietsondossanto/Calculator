import React, { useState } from "react";

import { AiOutlineHistory } from "react-icons/ai";
import { BsBackspace } from "react-icons/bs";

import * as Math from "./../../utils/Math";

import { Wrapper, Container, Header, Body } from "./styled";

const Programmer = ({ state }) => {
  const [result, setResult] = useState("0");
  const [expressio, setExpression] = useState("");

  const operators = ["+", "-", "*", "/", "."];

  const update = (value) => {
    let regex = /^[0-9]+\.[0-9]+$/;
    let regex2 = /\s[0-9]+\.[0-9]+$/g;

    if (
      (operators.includes(value) && expressio == "") ||
      (operators.includes(value) && Math.TheLastItemIsOperator(expressio)) ||
      (regex.test(expressio) && value == ".") ||
      (regex2.test(expressio) && value == ".")
    ) {
      return;
    } else {
      if (
        expressio.split("").reverse()[0] == "e" ||
        expressio.split("").reverse()[0] == "π"
      ) {
        setExpression(
          expressio + " x " + Math.filterOperators(value.toString(), true)
        );
      } else if (expressio.split("").reverse()[0] == "%") {
        setExpression(
          expressio + " x " + Math.filterOperators(value.toString(), true)
        );
      } else if (value == "(" || value == ")") {
        setExpression(expressio + value);
        return;
      } else {
        setExpression(expressio + Math.filterOperators(value.toString(), true));
      }

      if (
        expressio.toString().split("").reverse()[0] == ")" &&
        expressio[0] != "("
      ) {
        let a =
          expressio.slice(0, -1) +
          Math.filterOperators(value.toString(), true) +
          ")";

        setExpression(a);

        switch (expressio.split("")[0]) {
          case "√":
            if (Math.sqrt(a) != undefined) setResult(Math.sqrt(a));
            break;
          default:
            setExpression("Algo correu mau :(");
            return;
        }
      } else if (!operators.includes(value)) {
        if (expressio[0] == "(" && !expressio.includes(")")) {
          return;
        } else {
          setResult(
            eval(Math.filterOperators(expressio.toString()) + value).toString()
          );
        }
      }
    }
  };

  const validation = (value) => {
    if (expressio.split("").reverse()[0] != "%") {
      switch (value) {
        case "%":
          if (expressio == 0) return;
          if (expressio.split("").reverse()[0] == ")") {
            setExpression(expressio.slice(0, -1) + value + ")");
          } else {
            setExpression(expressio + value);
            setResult(Math.porcentagem(expressio).toString());
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
                  <button type="button">A</button>
                </td>
                <td>
                  <button type="button">B</button>
                </td>
                <td>
                  <button type="button">C</button>
                </td>
                <td>
                  <button type="button" onClick={() => update("(")}>
                    (
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => update(")")}>
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
                    onClick={() => update("+")}
                  >
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button">D</button>
                </td>
                <td>
                  <button type="button">E</button>
                </td>
                <td>
                  <button type="button">F</button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() => update("1")}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() => update("2")}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() => update("3")}
                  >
                    3
                  </button>
                </td>
                <td>
                  <button
                    id="operators"
                    type="button"
                    onClick={() => update("-")}
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
                      x<sup>y</sup>
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
                    onClick={() => update("4")}
                  >
                    4
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() => update("5")}
                  >
                    5
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() => update("6")}
                  >
                    6
                  </button>
                </td>
                <td>
                  <button
                    id="operators"
                    type="button"
                    onClick={() => update("*")}
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
                    onClick={() => update("7")}
                  >
                    7
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() => update("8")}
                  >
                    8
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() => update("9")}
                  >
                    9
                  </button>
                </td>
                <td>
                  <button
                    id="operators"
                    type="button"
                    onClick={() => update("/")}
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
                    onClick={() => update(".")}
                  >
                    .
                  </button>
                </td>
                <td>
                  <button
                    id="numbers"
                    type="button"
                    onClick={() => update("0")}
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

export default Programmer;
