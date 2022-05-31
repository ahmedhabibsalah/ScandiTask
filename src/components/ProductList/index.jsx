import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import {
  Box,
  ButtonGend,
  Card,
  CardHeading,
  CardImg,
  Container,
  Content,
  ProductButtonsWrapper,
  ProductsContainer,
  TextWrapper,
  Title,
  CardParagraph,
  CardButton,
  CardContent,
  CardWrapper,
  Section,
} from "../../globalstyles/Styles";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div style={{ display: "flex" }}>
          <Skeleton height={350} />
        </div>
        <div style={{ display: "flex" }}>
          <Skeleton height={350} />
        </div>
        <div style={{ display: "flex" }}>
          <Skeleton height={350} />
        </div>
        <div style={{ display: "flex" }}>
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <Section>
          <ProductButtonsWrapper>
            <ButtonGend onClick={() => setFilter(data)}>ALL</ButtonGend>
            <ButtonGend onClick={() => filterProduct("men's clothing")}>
              Men's Clothing
            </ButtonGend>
            <ButtonGend onClick={() => filterProduct("women's clothing")}>
              Women's Clothing
            </ButtonGend>
            <ButtonGend onClick={() => filterProduct("jewelery")}>
              Jewelery
            </ButtonGend>
            <ButtonGend onClick={() => filterProduct("electronics")}>
              Electronics
            </ButtonGend>
          </ProductButtonsWrapper>
          <CardWrapper>
            <Container>
              {filter.map((product) => {
                return (
                  <Card key={product.id}>
                    <CardImg src={product.image} alt={product.title} />
                    <CardContent>
                      <CardHeading>
                        {product.title.substring(0, 12)}...
                      </CardHeading>
                      <CardParagraph>$ {product.price}</CardParagraph>

                      <CardButton to={`/home/${product.id}`}>
                        View Item
                      </CardButton>
                    </CardContent>
                  </Card>
                );
              })}
            </Container>
          </CardWrapper>
        </Section>
      </>
    );
  };
  return (
    <ProductsContainer>
      <Box>
        <TextWrapper>
          <Title>Latest Products</Title>
        </TextWrapper>
      </Box>
      <Content>{loading ? <Loading /> : <ShowProducts />}</Content>
    </ProductsContainer>
  );
};

export default Products;
