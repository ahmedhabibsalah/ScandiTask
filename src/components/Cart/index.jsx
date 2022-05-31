import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonWrapper,
  CartItemWrapper,
  EmptyCartContainer,
  EmptyCartTitle,
  FilledCartContainer,
  FilledCartWrapper,
  ImageContainer,
  InfoWrapper,
  ProductButton,
  ProductCartImage,
  ProductPrice,
  ProductTitle,
} from "../../globalstyles/Styles";
import { addCart, delCart } from "../../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <>
        <EmptyCartContainer>
          <EmptyCartTitle>Your Cart is Empty</EmptyCartTitle>
        </EmptyCartContainer>
      </>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <FilledCartContainer>
          <FilledCartWrapper>
            <CartItemWrapper>
              <ImageContainer>
                <ProductCartImage src={product.image} alt={product.title} />
              </ImageContainer>
              <InfoWrapper>
                <ProductTitle style={{ fontSize: "2rem" }}>
                  {product.title}
                </ProductTitle>
                <ProductPrice style={{ fontSize: "1.5rem" }}>
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </ProductPrice>
                <ButtonWrapper>
                  <ProductButton
                    style={{ marginRight: "30px" }}
                    onClick={() => handleDel(product)}
                  >
                    -
                  </ProductButton>
                  <ProductButton onClick={() => handleAdd(product)}>
                    +
                  </ProductButton>
                </ButtonWrapper>
              </InfoWrapper>
            </CartItemWrapper>
          </FilledCartWrapper>
        </FilledCartContainer>
      </>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </>
  );
};

export default Cart;
