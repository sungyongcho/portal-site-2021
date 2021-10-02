import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { media } from "../styles/theme";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowSize } from "../hooks/useWindowSize";

type Props = {
  workList: [
    {
      address: string;
      workTitle: string;
      workYear: number;
      workMedia: string;
      workSize: string;
    }
  ];
};

const mobileSetting = {
  className: "slider-mobile variable-width",
  arrows: false,
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

const tabletSetting = {
  className: "slider-tablet variable-width",
  centerMode: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  variableWidth: true,
};

/**
 * Threshold from which mouse movement with pressed mouse button
 * is considered a drag instead of a click.
 */
const MoveDragThreshold = 10;

const MemberWorklist = ({ workList }: Props) => {
  const { height, width } = useWindowSize();

  // const [isOpen, setIsOpen] = useState(false);
  // const [imageAddress, setImageAddress] = useState("");
  // const [captionTitle, setCaptionTitle] = useState("");
  // const [captionYear, setCaptionYear] = useState(0);
  // const [captionMedia, setCaptionMedia] = useState("");
  // const [captionSize, setCaptionSize] = useState("");
  const [modal, setModal] = useState({
    imageAddress: "",
    captionTitle: "",
    captionYear: 0,
    captionMedia: "",
    captionSize: "",
    isOpen: false,
  });
  const [clickedPosision, setClickedPosisionX] =
    useState<{ x: number; y: number }>(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(modal.isOpen);
  }, [modal]);

  const handleOnMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    setClickedPosisionX({
      x: e.clientX,
      y: e.clientY,
    });
    e.preventDefault();
  };

  const handleOnMouseUp = (e: React.MouseEvent<HTMLElement>, work) => {
    if (
      Math.abs(clickedPosision.x - e.clientX) >= MoveDragThreshold ||
      Math.abs(clickedPosision.y - e.clientY) >= MoveDragThreshold
    )
      return;
    setModal({
      imageAddress: work.address,
      captionTitle: work.workTitle,
      captionYear: work.workYear,
      captionMedia: work.workMedia,
      captionSize: work.workSize,
      isOpen: true,
    });
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function handleClickModal() {
    setModal({
      imageAddress: "",
      captionTitle: "",
      captionYear: 0,
      captionMedia: "",
      captionSize: "",
      isOpen: false,
    })
  }

  return (
    <>
      {workList &&
        (width > 767 ? (
          <TabletFrame>
            <TabletImage>
              <Slider {...tabletSetting}>
                {workList.map((work) => (
                  <div
                    key={work.workTitle}
                  >
                    <img
                      alt="work description"
                      onMouseDown={handleOnMouseDown}
                      onMouseUp={(e) => handleOnMouseUp(e, work)}
                      src={`${work.address}`}
                    />
                  </div>
                ))}
                <div />
                <div />
              </Slider>
            </TabletImage>
          </TabletFrame>
        ) : (
          <MobileFrame>
            <MobileImage>
              <Slider {...mobileSetting}>
                {workList.map((work) => (
                  <div
                    key={work.workTitle}
                  >
                    <img
                      alt="work description"
                      onMouseDown={handleOnMouseDown}
                      onMouseUp={(e) => handleOnMouseUp(e, work)}
                      src={`${work.address}`}
                    />
                  </div>
                ))}
              </Slider>
            </MobileImage>
          </MobileFrame>
        ))}
      {modal.isOpen && (
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          title={modal.captionTitle}
        >
          {width > 767 ? (
            <div className="unset-img-desktop">
              <img
                className="custom-img-desktop"
                onClick={handleClickModal}
                src={modal.imageAddress}
                alt=""
              />
            </div>
          ) : (
            <div className="unset-img-mobile">
              <img
                className="custom-img-mobile"
                onClick={handleClickModal}
                src={modal.imageAddress}
                alt=""
              />
            </div>
          )}
          <br />
          <CaptionStyle>
            <TitleStyle>
              {modal.captionTitle !== "" && <div>{modal.captionTitle}</div>}
            </TitleStyle>
            {modal.captionYear !== 0 && <div>{modal.captionYear}</div>}
            {modal.captionMedia !== "" && <div>{modal.captionMedia}</div>}
            {modal.captionSize !== "" && <div>{modal.captionSize}</div>}
          </CaptionStyle>
        </Modal>
      )}
    </>
  );
};

const DesktopContainer = styled.div`
  width: 110%;
  height: 30vh;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const CaptionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.desktop} {
    font-size: 1.5em;
    line-height: 1.2;
  }
`;
const TitleStyle = styled.div`
  text-align: center;
  line-height: 2;
  font-size: 1.4em;
  ${media.desktop}
  {
    line-height: 1.6;
    font-size:1.8em;
  }
`;

const MobileFrame = styled.div`
  margin-top:0.5em;
  margin-bottom:1em;
  margin-left: -2vw;
  width:70vw;
  height: 20vh;
  overflow: hidden;
`;

const MobileContainer = styled.div`
  background-color: transparent;
`;

const MobileImage = styled.div`
  width: auto;
`;

const TabletFrame = styled.div`
  margin-left: 1%;
  margin-bottom: 3%;
  background-color: transparent;
  width: 200%;
  height: 20vh;
  overflow: hidden;
  ${media.desktop} {
    height: 25vh;
  }
`;

const TabletImage = styled.div`
  width: auto;
`;

// https://github.com/akiran/react-slick/issues/848
export default MemberWorklist;
