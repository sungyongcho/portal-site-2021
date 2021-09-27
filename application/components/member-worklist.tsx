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

const sliderSettings = {
  className: "slider variable-width",
  infinite: true,
  variableWidth: true,
  slidesToShow: 3,
  slideToScroll: 1
};

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
    setShowModal(true);
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
    setShowModal(false);
    setImageAddress('');
    setCaptionTitle('');
    setCaptionYear(0);
    setCaptionMedia('');
    setCaptionSize('');
  }

  return (
    <>
      {/* for listup */}
      {workList.map((workList) => (
        <SliderContainer>

          <Slider {...sliderSettings}>

            <Image onClick={(e) => {
              openModal(e, workList)
            }}
              src={`${workList.address}`} width='200' height='400px' alt="" />
          </Slider>
        </SliderContainer>

      ))}
      {/* for modal popup*/}
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

    </ >
  )
}

const WorklistLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  ${media.desktop}{
        margin-bottom: 2%;
      }
`
const SliderContainer = styled.div`
  width:100%;
  overflow:hidden;
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
