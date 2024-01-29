'use client';

import { PopOverButton } from '@/components/PopOver/PopOverButton';
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

interface GraphDrawerProps extends Omit<HTMLAttributes<HTMLLIElement>, 'children'> {
  openButtonText: string;
  closeButtonText: string;
  children?: any;
}

export const GraphDrawer = ({ openButtonText, closeButtonText, children }: PropsWithChildren<GraphDrawerProps>) => {
  const [open, setOpen] = useState(false);

  let graphDrawer = (
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
  return graphDrawer;
};
export default function Home() {
  return (
    <Figure>
      <Paragraph>naam van grafiek</Paragraph>
      <GraphDrawer openButtonText={'open tabel'} closeButtonText={'close tabel'}>
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
      </GraphDrawer>
    </Figure>
  );
}
