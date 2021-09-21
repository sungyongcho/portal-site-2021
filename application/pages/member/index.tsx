import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'

import { IMember } from '../../types/IMember'
import { getAllMemberPosts } from '../../utils/mdxUtils';

import Item from '../../styles/item'

type MemberProps = {
  members: IMember[];
}

const MemberNav = ({ members }: MemberProps) => {
  return (
    <>
      {
        members.map((members) => (
          <Item key={members.slug}>
            <Link href={`member/${members.slug}`}><a>{members.memberName}</a></Link>
          </Item>
        ))
      }
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
