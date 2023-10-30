'use client';
import {
  AccordionProvider,
  Button,
  Checkbox,
  Document,
  Drawer,
  FormField,
  FormLabel,
  Heading3,
  PageHeader,
} from '@utrecht/component-library-react';
import './styles/drawer-scroll-list.css';

export default function Home() {
  return (
    <Document>
      <Drawer open>
        <PageHeader className="voorbeeld--sticky-header">
          <Heading3>Erfgoed</Heading3>
          <Button>X</Button>
        </PageHeader>
      </Drawer>
    </Document>
  );
}
