import { GetStaticProps } from 'next';

import Link from 'next/link'
import router from 'next/router'

import { IMember } from '../../types/IMember'
import { getAllMemberPosts } from '../../utils/mdxUtils';

type MemberProps = {
  members: IMember[];
}

const MemberNav = ({ members }: MemberProps) => {
  return (
    <>
      <div>
        <nav>
          <ul>
            {members.map((members) => (
              <div key={members.slug}>
                <li>
                  <Link href={`member/${members.slug}`}><a>{members.memberName}</a></Link>
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </div>
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
