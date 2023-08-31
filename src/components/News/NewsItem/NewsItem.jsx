import React from 'react';
import { BlueLine, BottomInfoWrapper,  ImageWrapper,  Img,  NewsBody, NewsBox, NewsDate, NewsItemContainer, NewsLink, NewsTitle, TextContent } from './NewsItem.styled';
// import news from '../../../images/news.png'
import { formatDistanceToNow, format } from 'date-fns';


export const NewsItem = ({news}) => {
  const { imgUrl, title, date, url } = news;

  

  
const formatDate = date => {
    return format(new Date(date), 'Pp');
  };

    return (
      <>
        <NewsItemContainer>
          {/* <BlueLine></BlueLine> */}

          {/* <NewsBox> */}
            <ImageWrapper>
              <Img src={imgUrl} alt={title} />
            </ImageWrapper>
            <TextContent>
              <NewsTitle href={url && url}>{title}</NewsTitle>

              <NewsBody>
                In January, I fell in love with someone. It was the last thing
                I’d expect and caught me completely off guard.He has sandy blond
                hair with flecks of gray and gorgeous, sad eyes. He loves to go
                on walks and cuddle. His name is Herbie.
              </NewsBody>

              <BottomInfoWrapper>
                <NewsDate>{formatDate(date)}</NewsDate>
                <NewsLink href="#" target="_blank" rel="noreferrer">
                  Read more
                </NewsLink>
              </BottomInfoWrapper>
            </TextContent>
          {/* </NewsBox> */}
        </NewsItemContainer>
      </>
    );
};