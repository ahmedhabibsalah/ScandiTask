import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Category,
  ImageContainer,
  InfoWrapper,
  ProductContainer,
  ProductImage,
  ProductsContainer,
  ProductTitle,
  ProductParagraph,
  Rating,
  ProductPrice,
  ProductButton,
  ButtonWrapper,
} from "../../globalstyles/Styles";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <ProductContainer>
          <ImageContainer>
            <ProductImage src={product.image} alt={product.title} />
          </ImageContainer>
          <InfoWrapper>
            <Category>{product.category}</Category>
            <ProductTitle>{product.title}</ProductTitle>
            <Rating>Rating {product.rating && product.rating.rate}</Rating>
            <ProductPrice>$ {product.price}</ProductPrice>
            <ProductParagraph>{product.description}</ProductParagraph>
            <ButtonWrapper>
              <ProductButton
                style={{ marginRight: "30px" }}
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </ProductButton>
              <ProductButton>
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  Go to Cart
                </Link>
              </ProductButton>
            </ButtonWrapper>
          </InfoWrapper>
        </ProductContainer>
      </>
    );
  };
  return (
    <ProductsContainer style={{ justifyContent: "flex-start" }}>
      <Box>{loading ? <Loading /> : <ShowProduct />}</Box>
    </ProductsContainer>
  );
};

export default Product;
