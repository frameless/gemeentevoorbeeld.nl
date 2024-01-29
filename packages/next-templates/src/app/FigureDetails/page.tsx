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
import './styles/FigureDetails.css';

interface FigureDetailsProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  openButtonText: string;
  closeButtonText: string;
  children?: any;
}

export const FigureDetails = ({ openButtonText, closeButtonText, children }: PropsWithChildren<FigureDetailsProps>) => {
  const [open, setOpen] = useState(false);

  let FigureDetails = (
    <div>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {openButtonText}
      </Button>
      <Drawer open={open}>
        <Button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {closeButtonText}
        </Button>
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
      <FigureDetails openButtonText={'open tabel'} closeButtonText={'close tabel'}>
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
