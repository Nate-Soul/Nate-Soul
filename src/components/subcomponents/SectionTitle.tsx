import React from 'react';

import { sectionTitleType } from '@/types/types';

const SectionTitle = ({containerStyles, title, extendedTitle1, extendedTitle2, text}: sectionTitleType) => {

  return (
    <header className={containerStyles}>
        <h2 className="text-3xl font-bold leading-snug mb-4 capitalize">
            <span className="uppercase text-sm text-main-500 tracking-wider">
                {title}
            </span> <br />
        {extendedTitle1} <br />
        {extendedTitle2}
        </h2>
        <p>{text}</p>
    </header>
  )
}

export default SectionTitle
