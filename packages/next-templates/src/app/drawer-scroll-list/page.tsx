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
} from '@utrecht/component-library-react';
import './styles/drawer-scroll-list.css';

const period = [
  { label: 'Late middeleeuwen', value: 'Late middeleeuwen' },
  { label: 'Moderne tijd', value: 'Moderne tijd' },
  { label: 'Prehistorie', value: 'Prehistorie' },
  { label: 'Romeinse tijd', value: 'Romeinse tijd' },
  { label: 'Vroege middeleeuwen', value: 'Vroege middeleeuwen' },
  { label: 'Vroegmoderne tijd', value: 'Vroegmoderne tijd' },
];

const theme = [
  { label: '3D-reconstructies en animaties', value: '3D-reconstruction' },
  { label: 'Archeologie', value: 'Archeologie' },
  { label: 'Gebouwen', value: 'Gebouwen' },
  { label: 'Oorlog en verdediging', value: 'Oorlog en verdediging' },
  { label: 'Stedenbouw en groen', value: 'Stedenbouw en groen' },
  { label: 'Werelderfgoed', value: 'Werelderfgoed' },
];

const tags = [
  { label: 'Handel ambacht en industrie', value: 'Handel ambacht en industrie' },
  { label: 'Landbouw veeteelt en visserij', value: 'Landbouw veeteelt en visserij' },
  { label: 'Maritiem erfgoed', value: 'Maritiem erfgoed' },
  { label: 'Moreelse route', value: 'Moreelse route' },
  { label: 'Nieuwe hollandse waterlinie', value: 'Nieuwe hollandse waterlinie' },
  { label: 'Oorlog en verdediging', value: 'Oorlog en verdediging' },
  { label: 'Parken', value: 'Parken' },
  { label: 'Religieus erfgoed', value: 'Religieus erfgoed' },
  { label: 'Romeinse limes', value: 'Romeinse limes' },
  { label: 'Woningbouw', value: 'Woningbouw' },
];

export default function Home() {
  return (
    <Document>
      <Drawer open>
        <header className="voorbeeld-drawer__header--sticky">
          <Heading3>Verfijn resultaten</Heading3>
          <Button>X</Button>
        </header>
        <AccordionProvider
          sections={[
            {
              body: (
                <div>
                  {period.map(({ label, value }) => (
                    <FormField>
                      <Checkbox value={value} />
                      <FormLabel>{label}</FormLabel>
                    </FormField>
                  ))}
                </div>
              ),
              expanded: true,
              label: 'periode',
            },
            {
              body: (
                <div>
                  {theme.map(({ label, value }) => (
                    <FormField>
                      <Checkbox value={value} />
                      <FormLabel>{label}</FormLabel>
                    </FormField>
                  ))}
                </div>
              ),
              expanded: true,
              label: 'Thema',
            },
            {
              body: (
                <div>
                  {tags.map(({ label, value }) => (
                    <FormField>
                      <Checkbox value={value} />
                      <FormLabel>{label}</FormLabel>
                    </FormField>
                  ))}
                </div>
              ),
              expanded: true,
              label: 'Tags',
            },
          ]}
        />
      </Drawer>
    </Document>
  );
}
