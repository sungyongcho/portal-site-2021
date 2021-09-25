import type { NextPage } from 'next';
import HeadInfo from '../components/HeadInfo';

import styled from 'styled-components'
import ContentLayout from '../styles/content-layout'
import ContentHeaderWrapper from '../styles/content-header-wrapper'
import ContentWrapper from '../styles/content-wrapper'
import ContentLogo from '../components/ContentLogo'
const networking: NextPage = () => {
  return (
    <ContentLayout>
      <ContentLogo />
      <HeadInfo title="Networking"></HeadInfo>
      <h1>SNS</h1>
    </ContentLayout>
  )
}

export default networking
