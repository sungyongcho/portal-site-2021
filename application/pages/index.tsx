import type { NextPage } from 'next'
import styled from "styled-components";
import HeadInfo from 'components/HeadInfo';
import useRouterScroll from 'hooks/useRouterScroll';

const Home: NextPage = () => {
  useRouterScroll();
  return (
    <>
      <HeadInfo />
    </>
  )
}




export default Home
