import React from "react";
import { Titles, Wrap, Image } from "./style";

export const Products = () => {
  return (
    <Wrap>
      <Wrap.Wrapper>
        <Titles>
          <Titles.Title>OUR PRODUCTS</Titles.Title>
          <Titles.Menu>
            <Titles.Item>All Products</Titles.Item>
            <Titles.Item>Best Sellers</Titles.Item>
            <Titles.Item>New Arrivals</Titles.Item>
            <Titles.Item>Todays Deals</Titles.Item>
          </Titles.Menu>
        </Titles>
        <Wrap.Line>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image.Img2 />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image.Img3 />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
        </Wrap.Line>

        <Wrap.Line>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
          <Wrap.Card>
            <Image />
            <Titles>
              <Titles.Name>CHAIR</Titles.Name>
              <Titles.Desc>Minimal LCD chair</Titles.Desc>
              <Titles.Price>$180</Titles.Price>
            </Titles>
          </Wrap.Card>
        </Wrap.Line>
      </Wrap.Wrapper>
    </Wrap>
  );
};
