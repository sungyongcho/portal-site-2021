import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react';
import Modal from 'react-modal';
import { media } from '../styles/theme'

import Slider from "react-slick";

type Props = {
  workList: [{
    address: string,
    workTitle: string,
    workYear: number,
    workMedia: string,
    workSize: string
  }];
}

const settings = {
  className: "slider variable-width",
  arrows: false,
  infinite: false,
  slidesToShow: 3,
  swipeToSlide: true,
  variableWidth: true,
  centerPadding: '50px'
};

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageOne from '../public/assets/artists/parkdongjoon/worklists/parkdongjoon_1.jpg'
import ImageTwo from '../public/assets/artists/parkdongjoon/worklists/parkdongjoon_2.jpg'
import ImageThree from '../public/assets/artists/parkdongjoon/worklists/parkdongjoon_3.jpg'
import ImageFour from '../public/assets/artists/parkdongjoon/worklists/parkdongjoon_4.jpg'
import ImageFive from '../public/assets/artists/parkdongjoon/worklists/parkdongjoon_5.jpg'
import ImageSix from '../public/assets/artists/parkdongjoon/worklists/parkdongjoon_6.jpg'
import ImageSeven from '../public/assets/artists/parkdongjoon/worklists/parkdongjoon_7.jpg'


const MemberWorklist = ({ workList }: Props) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageAddress, setImageAddress] = useState('');
  const [captionTitle, setCaptionTitle] = useState('');
  const [captionYear, setCaptionYear] = useState(0);
  const [captionMedia, setCaptionMedia] = useState('');
  const [captionSize, setCaptionSize] = useState('');


  const openModal = (e, src) => {
    setIsOpen(true);
    setImageAddress(src.address);
    setCaptionTitle(src.workTitle);
    setCaptionYear(src.workYear);
    setCaptionMedia(src.workMedia);
    setCaptionSize(src.workSize);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setImageAddress('');
    setCaptionTitle('');
    setCaptionYear(0);
    setCaptionMedia('');
    setCaptionSize('');
  }

  return (
    <Slider {...settings}>
      <ImageFrame>
        <Image src={ImageOne} />
      </ImageFrame>
      <ImageFrame>
        <Image src={ImageTwo} />
      </ImageFrame>
    </Slider>
  )
}

const WorklistWrapper = styled.div`
   overflow-y:hidden;
   overflow-x:hidden;
   width:100%;
 `;

const WorklistBody = styled.div`
   width:500px;
   margin: 0 auto;
   height:200px;
   border:1px solid blue;
 `;
const WorklistLayout = styled.div`
  display: flex;
   width:100vw;
   margin-left: calc(-50vw + 50%);
   height:200px;
   border:1px solid green;
`

const ImageFrame = styled.div`
  width:auto;
  margin-right: 40px;
`;


export default MemberWorklist
