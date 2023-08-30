'use client';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';
import {
  Button,
  ButtonGroup,
  FormField,
  FormLabel,
  Heading3,
  Page,
  Paragraph,
  Select,
  SelectOption,
  Textbox,
} from '@utrecht/component-library-react';
// import { UtrechtIconArrow } from '@utrecht/web-component-library-react';

export default function Home() {
  return (
    <Page>
      <Heading3>Beschikbaarheid</Heading3>
      <Paragraph>
        Staat op een bepaalde locatie de bakfiets of aanhanger er niet bij dan is deze in reparatie. <br />
        Voor de bakfiets geldt, zorg dat u deze niet te zwaar belaadt. Om het afvalstation te bereiken moet u namelijk
        een heuveltje op. <br />
      </Paragraph>

      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor="1111">Aanhanger/bakfiets</FormLabel>
        </Paragraph>
        <Paragraph>
          <Select size={10} id="1111" name="aanhanger bakfiets">
            <SelectOption disabled selected value="--- Toon alle aanhangers/bakfietsen ---">
              --- Toon alle aanhangers/bakfietsen ---
            </SelectOption>
            <SelectOption value="1000000001">Aanhanger 1Tractieweg</SelectOption>
            <SelectOption value="1000000003">Aanhanger De Stits</SelectOption>
            <SelectOption value="1000000002">Aanhanger Lunetten</SelectOption>
            <SelectOption value="1000000004">Bakfiets De Stits</SelectOption>
          </Select>
        </Paragraph>
      </FormField>

      <FormField type="text">
        <Paragraph>
          <FormLabel htmlFor="2222">Datum</FormLabel>
        </Paragraph>
        <Paragraph>
          <Textbox id="2222" name="datums beschikbaarheid" type="date" autoComplete="off" />
        </Paragraph>
      </FormField>

      <ButtonGroup>
        <Button appearance="primary-action-button">Bekijk schema</Button>
        <Button appearance="secondary-action-button" type="reset" name="clear">
          Wissen
        </Button>
      </ButtonGroup>
    </Page>
  );
}
