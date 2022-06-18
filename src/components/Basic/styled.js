/* eslint-disable prettier/prettier */
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  display: ${({ state }) => state == "active" ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  margin-bottom: 5rem;
  overflow: hidden;
`

export const Container = styled.div`
  width: 25.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  object-fit: blur(45px);
`

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 0.75rem;
  padding: 1rem;
  border: 1px solid #dadce0;
  border-radius: 5px;

  .icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  .expressio {
    flex: 1;
    margin-bottom: 1rem;
    font-size: 1rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.text};
  }

  .result {
    width: 100%;
    height: 4.5rem;
    flex: 3;
    font-size: 2rem;
    border: none;
    color: ${({ theme }) => theme.colors.textContrast};
    background-color: transparent;

    .b {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.textContrast};
    }
  }
`
export const Body = styled.tbody`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  button {
    width: 5.313rem;
    height: 2.25rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1rem;
    appearance: none;
    color: ${({ theme }) => theme.colors.textContrast};
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.backgroundContrast};
    cursor: pointer;
    transition: linear 300ms;

    &:hover {
      opacity: 0.9;
    }
  }

  [id='numbers'] {
    background-color: ${({ theme }) =>
    theme.title === 'LIGHT'
      ? theme.colors['grey-200']
      : theme.colors['grey-700']};
  }

  .igual {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors['white']};
    background-color: ${({ theme }) => theme.colors['blue-light']};
  }

  .delete {
    color: ${({ theme }) => theme.colors['white']};
    background-color: ${({ theme }) => theme.colors['red-light']};
  }
`
export const History = styled.div`
  width: 20rem;
  height: 25rem;
  display: ${({ showHistory }) => showHistory == true ? "block" : "none"};
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.35);
  background-color: ${({ theme }) => theme.colors['grey-900']};
  object-fit: blur(45px);
  padding: 2rem;
  font-size: 1.5rem;
  animation: animation;
  animation-duration: 1s;
  overflow: auto;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    margin-top: 0.5rem;
  }

  @keyframes animation {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`
