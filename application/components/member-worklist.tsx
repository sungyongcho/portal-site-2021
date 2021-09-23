import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react';
import Modal from 'react-modal';

type Props = {
  workList: string[];
}

const MemberWorklist = ({ workList }: Props) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [imageAddress, setImageAddress] = useState('');

  const openModal = (e, src) => {
    setIsOpen(true);
    setImageAddress(src);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setImageAddress('');
  }

  return (
    <WorklistLayout>
      {/* for listup */}
      {workList.map((workList) => (
        <Image onClick={(e) => {
          openModal(e, workList)
        }}
          src={`${workList}`} width='200' height='300px' alt="" />
      ))}
      {/* for modal popup*/}
      {
        modalIsOpen && <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <Image onClick={closeModal}
            src={imageAddress} layout="fill"
            objectFit="contain" alt="" />
        </Modal>
      }

    </WorklistLayout >
  )
}

const WorklistLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`
export default MemberWorklist
