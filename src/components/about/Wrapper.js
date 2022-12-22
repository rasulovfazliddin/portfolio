import styled from "styled-components";

const Wrapper = styled.aside`
  section {
    height: 80vh;
  }
  .about__container {
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
  .about__me {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(
      45deg,
      transparent,
      var(--color-primary),
      transparent
    );
    transition: var(--transition);
    display: grid;
    place-items: center;
    @media (max-width: 1024px) {
      width: 50%;
      margin: 2rem auto 4rem;
    }
    @media (max-width: 600px) {
      width: 65%;
      margin: 0 auto 3rem;
    }
  }
  .about__me-image {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
  }
  .about__me-image img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  .about__me-image:hover {
    transform: rotate(0);
    transition: var(--transition);
  }
  .about__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    @media (max-width: 600px) {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
  .about__card {
    background: var(--color-bg-variant);
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
  }
  .about__card:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    transition: var(--transition);
    cursor: default;
  }
  .about__icon {
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .about__card small {
    font-size: 0.7rem;
    color: var(--color-light);
  }
  .about__content p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);
    @media (max-width: 1024px) {
      margin: 1rem 0 1.5rem;
    }
    @media (max-width: 600px) {
      text-align: center;
      margin: 1.5rem 0;
    }
  }
`;
export default Wrapper;
