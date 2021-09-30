import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react';
import Modal from './Modal';
import { media } from '../styles/theme'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowSize } from "../hooks/useWindowSize";

type Props = {
  workList: [{
    address: string,
    workTitle: string,
    workYear: number,
    workMedia: string,
    workSize: string
  }];
}

const desktopSetting = {
  className: "slider-desktop variable-width",
  infinite: false,
  variableWidth: true,
  slidesToShow: 3,
};

const mobileSetting = {
  className: "slider-mobile variable-width",
  arrows: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};


/**
 * Threshold from which mouse movement with pressed mouse button
 * is considered a drag instead of a click.
 */
const MoveDragThreshold = 10;




const MemberWorklist = ({ workList }: Props) => {

  const { height, width } = useWindowSize();

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
      {width > 767 ? (<Container>
        <Slider {...desktopSetting}>
          {workList.map((workList) => (
            <img
              alt="" onClick={(e) => {
                openModal(e, workList)
              }}
              src={`${workList.address}`} />
          ))}
          <div />
          <div />
        </Slider>
      </Container >) :
        (<MobileContainer>
          <Slider {...mobileSetting}>
            {workList.map((workList) => (
              <img
                alt="" onClick={(e) => {
                  openModal(e, workList)
                }}
                src={`${workList.address}`} />
            ))}
          </Slider>
        </MobileContainer >)}
      {
        modalIsOpen && <Modal
          onClose={() => setShowModal(false)}
          show={showModal} title={captionTitle}
        >
          <div className="unset-img">
            <img className="custom-img" onClick={closeModal}
              src={imageAddress} width='100%'
              height='100%'
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
  width: 200%;
  overflow:hidden;
  ${media.desktop}{
    width:100%;
  }
`;

const MobileContainer = styled.div`
  overflow:hidden;
  padding: 0;
  width:100%;
  height:25vh;
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
  ${media.desktop}{
    font-size: 1.5em;
    line-height: 1.2;
  }
`;
const TitleStyle = styled.div`
  line-height: 1.6;
  font-size: 1.8em;
`;

// https://github.com/akiran/react-slick/issues/848
export default MemberWorklist
