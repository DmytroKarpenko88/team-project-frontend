import React from 'react';
import { BlueLine, BottomInfoWrapper,  ImageWrapper,  Img,  NewsBody, NewsBox, NewsDate, NewsItemContainer, NewsLink, NewsTitle, TextContent } from './NewsItem.styled';
import news from '../../../images/news.png'


export const NewsItem = () => {

    return (
      <>
        <NewsItemContainer>
          <BlueLine></BlueLine>

          <NewsBox>
            <ImageWrapper>
              <Img src={news} alt="" />
            </ImageWrapper>
            <TextContent>
              <NewsTitle>On Pets, Moral Logic and Love</NewsTitle>

              <NewsBody>
                In January, I fell in love with someone. It was the last thing
                I’d expect and caught me completely off guard.He has sandy blond
                hair with flecks of gray and gorgeous, sad eyes. He loves to go
                on walks and cuddle. His name is Herbie.
              </NewsBody>

              <BottomInfoWrapper>
                <NewsDate>zeroDate</NewsDate>
                <NewsLink href="#" target="_blank" rel="noreferrer">
                  Read more
                </NewsLink>
              </BottomInfoWrapper>
            </TextContent>
          </NewsBox>
        </NewsItemContainer>
      </>
    );
};