import { FunctionComponent } from "react";
import Image from "next/image";
import styled from "styled-components";

type Images = {
  path: string;
  widthRatio: number;
  altText: string;
  url: string;
};

type Props = {
  images: Images[] | null;
  gap: string | null;
};

const HorizontalImages: FunctionComponent<Props> = ({ images, gap }) => {
  return (
    <Container>
      {images && images.map((image) => (
        <div key={image.altText} style={{ flexGrow: image.widthRatio, padding: gap ?? 0 }}>
          <a href={image.url} target="_blank">
            <Image src={image.path} width={image.widthRatio * 100} height={100} alt={image.altText} layout="responsive" />
          </a>
        </div>
      ))}
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
`

export default HorizontalImages;
