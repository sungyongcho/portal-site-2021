import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react';
import Modal from 'react-modal';
import { media } from '../styles/theme'

type Props = {
  workList: [{
    address: string,
    workTitle: string,
    workYear: number,
    workMedia: string,
    workSize: string
  }];
}

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
    <WorklistLayout>
      {/* for listup */}
      {workList.map((workList) => (
        <Image onClick={(e) => {
          openModal(e, workList)
        }}
          src={`${workList.address}`} width='200' height='400px' alt="" />
      ))}
      {/* for modal popup*/}
      {
        modalIsOpen && <Modal
          className="_"
          overlayClassName="_"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentElemet={(props, children) => <ModalStyle {...props}>{children}</ModalStyle>}
          overlayElement={(props, contentElement) => <OverlayStyle {...props}>{contentElement}</OverlayStyle>}
        >
          <Image onClick={closeModal}
            src={imageAddress} layout="fill"
            objectFit="contain" alt=""></Image>
          {captionTitle !== '' && <div>{captionTitle}</div>}
          {captionYear !== 0 && <div>{captionYear}</div>}
          {captionMedia !== '' && <div>{captionMedia}</div>}
          {captionSize !== '' && <div>{captionSize}</div>}
        </Modal>
      }

    </WorklistLayout >
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

const ModalStyle = styled.div`
  width:1em;
  background-color: blue;
`;


const OverlayStyle = styled.div`
  background-color: black;
`;

const ImageFrame = styled(Image)`
  display:inline-block;
  width:15%;
  height:10%;
  background-color: gray;
`;

export default MemberWorklist
