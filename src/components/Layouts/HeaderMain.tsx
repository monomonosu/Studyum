'use client'

import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'

export default function HeaderMain() {
  const HeaderContainer = styled.div`
    min-height: 70px;
    display: flex;
  `

  const HeaderInner = styled.div`
    margin: auto;
    width: 768px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  return (
    <>
      <HeaderContainer>
        <HeaderInner>
          <a href='/'>
            <Image src='/studyum_logo_256x256.png' width={64} height={64} alt='logo' />
          </a>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </HeaderInner>
      </HeaderContainer>
    </>
  )
}
