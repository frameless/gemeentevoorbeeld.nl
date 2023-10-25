'use client';
import { Accordion, Button, Document, Drawer, Heading3, PageHeader } from '@utrecht/component-library-react';
import '../styling/css/wrong-form-socks.css';

export default function Home() {
  return (
    <Document>
      <Drawer open>
        <PageHeader>
          <Heading3>Verfijn resultaten</Heading3>
          <Button>X</Button>
        </PageHeader>
        <Accordion></Accordion>
      </Drawer>
    </Document>
  );
}
