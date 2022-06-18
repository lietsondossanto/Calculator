import React from "react";

import { Wrapper } from "./styled";

const Header = ({ mode }) => {
  return (
    <Wrapper>
      <header>
        <nav>
          <ul>
            <li onClick={() => mode("basic")}>Basic</li>
            <li onClick={() => mode("advenced")}>Advenced</li>
            <li onClick={() => mode("programmer")}>Programmer</li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  );
};

export default Header;
