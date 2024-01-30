'use client';

import {
  Button,
  Drawer,
  Figure,
  Paragraph,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react';
import React, { HTMLAttributes, PropsWithChildren, useState } from 'react';
import React, { HTMLAttributes, PropsWithChildren, createRef, useState } from 'react';
import './styles/FigureDetails.css';

interface FigureDetailsProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  openButtonText: string;
  closeButtonText: string;
  drawerClassName?: string;
  children?: any;
}

export const FigureDetails = ({
  openButtonText,
  closeButtonText,
  drawerClassName,
  children,
}: PropsWithChildren<FigureDetailsProps>) => {
  const [open, setOpen] = useState(false);
  const drawer = createRef<HTMLDialogElement>();
  const showModal = () => {
    if (drawer.current) {
      setOpen(true);
      drawer.current.showModal();
    }
  };
  const closeModal = () => {
    setOpen(false);
    drawer.current?.close();
  };

  let FigureDetails = (
    <div>
      <Button onClick={showModal}>{openButtonText}</Button>
      <Drawer className={drawerClassName} ref={drawer} open={open}>
        <Button onClick={closeModal}>{closeButtonText}</Button>
        {children}
      </Drawer>
    </div>
  );
  return FigureDetails;
};
export default function Home() {
  return (
    <Figure>
      <Paragraph>naam van grafiek</Paragraph>
      <FigureDetails
        drawerClassName="utrecht-figure-details"
        openButtonText={'open tabel'}
        closeButtonText={'close tabel'}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell scope="col">Column A</TableHeaderCell>
              <TableHeaderCell scope="col">Column B</TableHeaderCell>
              <TableHeaderCell scope="col">Column C</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHeaderCell scope="row">Item 1</TableHeaderCell>
              <TableCell>Data</TableCell>
              <TableCell>More data</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>More data</TableCell>
              <TableCell>More data</TableCell>
              <TableCell>More data</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </FigureDetails>
    </Figure>
  );
}
