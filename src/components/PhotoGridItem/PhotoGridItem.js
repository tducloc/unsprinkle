import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const [imagePath] = src.split(".");

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            srcSet={`
              ${imagePath}.avif 1x, 
              ${imagePath}@2x.avif 2x,
              ${imagePath}@3x.avif 3x`}
            type="image/avif"
          />

          <source
            srcSet={`
            ${imagePath}.jpg 1x, 
            ${imagePath}@2x.jpg 2x, 
            ${imagePath}@3x.jpg 3x`}
            type="image/jpeg"
          />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 0;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  display: inline;

  &:not(&:first-of-type) {
    margin-left: 8px;
  }
`;

export default PhotoGridItem;
