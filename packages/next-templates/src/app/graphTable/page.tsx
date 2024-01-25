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
import React, { HTMLAttributes, PropsWithChildren } from 'react';

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
    <Figure>
      <Paragraph>naam van grafiek</Paragraph>
      <Button>open tabel</Button>
      <Drawer open>
        <Button>close</Button>
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
              <TableHeaderCell scope="col">Item 1</TableHeaderCell>
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
      </Drawer>
    </Figure>
  );
}
