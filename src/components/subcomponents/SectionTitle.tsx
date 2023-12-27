import React from 'react';

import { sectionTitleType } from '@/types/types';

const SectionTitle = ({containerStyles, title, extendedTitle, text, page}: sectionTitleType) => {

  return (
    <header className={containerStyles}>
      <span className="uppercase text-sm text-main-500 tracking-wider">
          {title}
      </span>
      {
        page ? (
          <h1 className="text-3xl font-bold leading-snug mb-4 capitalize" dangerouslySetInnerHTML={{ __html: extendedTitle }}></h1>
        ) : (
          <h2 className="text-3xl font-bold leading-snug mb-4 capitalize" dangerouslySetInnerHTML={{ __html: extendedTitle }}></h2>
        )
      }
      <p>{text}</p>
    </header>
  )
}

export default SectionTitle
