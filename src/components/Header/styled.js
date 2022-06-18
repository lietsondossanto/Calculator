import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 50%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0 auto;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  object-fit: blur(5px);

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;

      li {
        margin-right: 3rem;
        font-size: 1.5rem;
        list-style: none;
        color: ${({ theme }) => theme.colors.white};

        &:last-child {
          margin-right: 0rem;
        }

        &:hover {
          cursor: pointer;
          filter: brightness(0.9);
        }
      }
    }
  }
`
