import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'

import { IMember } from '../../types/IMember'
import { getAllMemberPosts } from '../../utils/mdxUtils';

import Item from '../../styles/item'
import { motion } from 'framer-motion';
import StyledMotion from '../../styles/StyledMotion'
import HeadInfo from 'components/HeadInfo';
import useRouterScroll from 'hooks/useRouterScroll';

import { useRouter } from 'next/router';

import React, { forwardRef } from 'react';
import styled from 'styled-components'

type MemberProps = {
  members: IMember[];
}

type Props = {
  onClick: () => void,
  href: string
}

type RefType = number


const MemberNav = ({ members }: MemberProps) => {
  const router = useRouter();
  const goToRecruit = () => {
    router.push('/member/syc').then(() => window.scrollTo(0, 0));
  };


  return (
    <>
      <HeadInfo title={"Member"} siteAddress={'member'} />
      <StyledMotion initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}>
        {
          members.map((members) => (
            <Item key={members.slug}>
              <Link href={`member/${members.slug}`}>{members.memberName}</Link>
            </Item>
          ))
        }
      </StyledMotion>
    </>
  )
}

const ButtonTest = styled.button`
`;

export default MemberNav

export const getStaticProps: GetStaticProps = async () => {
  const members = getAllMemberPosts([
    'slug',
    'order',
    'memberName',
    'profilePhoto',
    'content',
  ]);

  return { props: { members } };
};

