'use client';

import React, { HTMLAttributes, PropsWithChildren } from 'react';
import './index.style.css';

interface GraphTableProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  children?: any;
  imageAlt?: string;
}

export const GraphTable = ({ ...props }: PropsWithChildren<GraphTableProps>) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  //   let card = (

  //   );

  // return card;
};
export default function Home() {
  return (
    <div>
      <h1>hi</h1>hi
    </div>
  );
}
