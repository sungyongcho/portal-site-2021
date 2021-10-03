import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'

import { IMember } from '../../types/IMember'
import { getAllMemberPosts } from '../../utils/mdxUtils';

import Item from '../../styles/item'
import { motion } from 'framer-motion';
import StyledMotion from '../../styles/StyledMotion'
import HeadInfo from 'components/HeadInfo';

type MemberProps = {
  members: IMember[];
}

const MemberNav = ({ members }: MemberProps) => {
  const scrollToTop = (event) => {
    document.getElementById('root').scrollTo(0, 0);
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
              <Link href={`member/${members.slug}`} >{members.memberName}</Link>
            </Item>
          ))
        }
      </StyledMotion>
    </>
  )
}

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

