import type { NextPage } from 'next';
import HeadInfo from '../components/HeadInfo';

import styled from 'styled-components'
import ContentLayout from '../styles/content-layout'
import ContentHeaderWrapper from '../styles/content-header-wrapper'
import ContentWrapper from '../styles/content-wrapper'

const networking: NextPage = () => {
  return (
    <ContentLayout>
      <HeadInfo title="Networking"></HeadInfo>
      <h1>Networking</h1>
    </ContentLayout>
  )
}

export default networking
