import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react';
import Modal from './Modal';
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
  infinite: false,
  variableWidth: true,
  slidesToShow: 3,
  slideToScroll: 1
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

  const [showModal, setShowModal] = useState(false);

  const openModal = (e, src) => {
    setIsOpen(true);
    setImageAddress(src.address);
    setCaptionTitle(src.workTitle);
    setCaptionYear(src.workYear);
    setCaptionMedia(src.workMedia);
    setCaptionSize(src.workSize);
    setShowModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setShowModal(false);
    setImageAddress('');
    setCaptionTitle('');
    setCaptionYear(0);
    setCaptionMedia('');
    setCaptionSize('');
  }

  return (
    <>
      <Container>
        <Slider {...settings}>
          {workList.map((workList) => (
            <Image onClick={(e) => {
              openModal(e, workList)
            }}
              src={`${workList.address}`} width="100%" height="100%" alt="" />
          ))}
          <div />
          <div />
        </Slider>
      </Container >
      {
        modalIsOpen && <Modal
          onClose={() => setShowModal(false)}
          show={showModal} title={captionTitle}
        >
          <div className="unset-img">
            <Image className="custom-img" onClick={closeModal}
              src={imageAddress} width='100%'
              height='100%'
              objectFit='contain'
              layout='fill'
              alt="" />
          </div>
          <br />
          <CaptionStyle>
            <TitleStyle>{captionTitle !== '' && <div>{captionTitle}</div>}</TitleStyle>
            {captionYear !== 0 && <div>{captionYear}</div>}
            {captionMedia !== '' && <div>{captionMedia}</div>}
            {captionSize !== '' && <div>{captionSize}</div>}</CaptionStyle>
        </Modal>
      }
    </>
  )
}

const Container = styled.div`
  width:50vw;
  overflow:hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div{
    outline: none;
  }
`;


const CaptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
  line-height: 1.2;
`;
const TitleStyle = styled.div`
  line-height: 1.6;
  font-size: 1.8em;
`;


export default MemberWorklist
