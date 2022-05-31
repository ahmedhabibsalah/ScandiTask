import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px grey;
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 24px;
  font-size: 1.4rem;
  font-family: cursive;
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  /* box-shadow: 1px 1px 1px 3px grey; */
  border: 2px solid #000;
  height: 50px;
  border-radius: 5px;
  align-self: center;
  color: black;
  cursor: pointer;
`;
export const NavBtnLink = styled(LinkRouter)`
  padding: 10px 22px;
  font-size: 1.2rem;
  outline: none;
  text-decoration: none;
  font-family: cursive;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductsContainer = styled.div`
  padding-top: 30px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
`;
export const Title = styled.h1`
  font-size: 3rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProductButtonsWrapper = styled.div`
  display: flex;
  flex-direction: flex-start;
  margin-bottom: 60px;
`;
export const ButtonGend = styled.h3`
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  margin-left: 30px;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  height: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const CardImg = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
`;

export const CardHeading = styled.h4`
  font-size: 1rem;
  color: #000;
  margin-bottom: 14px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const CardParagraph = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
`;

export const CardButton = styled(LinkRouter)`
  background-color: #000000;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #e5e7eb;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 160px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    outline: 0;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 2px;
    left: 2px;
  }

  @media (min-width: 768px) {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div``;

export const ProductImage = styled.img`
  height: 400px;
  width: 400px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  max-width: 50%;
  @media (max-width: 600px) {
    max-width: 50%;
    text-align: center;
  }
`;

export const Category = styled.h4`
  font-size: 2rem;
  color: #9b9a9a;
  text-transform: uppercase;
  font-weight: 500;
`;

export const ProductTitle = styled.h1`
  font-size: 2.5rem;
  margin-top: -10px;
  font-weight: 500;
`;

export const Rating = styled.p`
  font-size: 1.8rem;
  margin-top: -10px;
`;
export const ProductPrice = styled.h3`
  font-size: 2.5rem;
  margin-top: -10px;
`;

export const ProductParagraph = styled.p`
  font-size: 1.6rem;
  color: #878585;
  margin-top: -10px;
`;

export const ProductButton = styled.button`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px;
`;

export const EmptyCartTitle = styled.h3`
  font-size: 3rem;
`;

export const FilledCartContainer = styled.div`
  margin: 0 50px 0 50px;
  padding: 40px 50px 40px 50px;
`;

export const FilledCartWrapper = styled.div`
  padding: 0 40px 0 40px;
`;
export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ProductCartImage = styled.img`
  height: 300px;
  width: 300px;
`;
