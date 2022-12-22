import styled from "styled-components";

const Wrapper = styled.aside`
  footer {
    background: var(--color-primary);
    padding: 3rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;
  }
  footer a {
    color: var(--color-bg);
  }
  .footer__logo {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
  }
  .footer__logo:hover {
    color: var(--color-white);
  }
  .permalinks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;
    color: var(--color-bg);
    @media (max-width: 600px) {
      flex-direction: column;
    }
  }
  .permalinks a:hover {
    color: var(--color-white);
  }
  .footer__socials {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
  }
  .footer__socials a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
  }
  .footer__socials a:hover {
    background: transparent;
    color: var(--color-bg);
    border-color: var(--color-bg);
  }
  .footer__copyright {
    margin-bottom: 4rem;
    color: var(--color-bg);
  }
`;
export default Wrapper;
