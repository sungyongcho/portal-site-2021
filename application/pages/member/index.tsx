import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'

import { IMember } from '../../types/IMember'
import { getAllMemberPosts } from '../../utils/mdxUtils';

import styled from 'styled-components'
import { motion } from 'framer-motion';

type MemberProps = {
  members: IMember[];
}

const MemberNav = ({ members }: MemberProps) => {
  return (
    <ExhibitionList>
      {members.map((members) => (
        <ExhibitionItem key={members.slug}>
          <Link href={`member/${members.slug}`}><a>{members.memberName}</a></Link>
        </ExhibitionItem>
      ))}
    </ExhibitionList>
  )
}

const ExhibitionList = styled(motion.div)`
`

const ExhibitionItem = styled(motion.div)`
  font-size: 1.8em;
  padding: 0 0.5em;
`
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
