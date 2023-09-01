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
        een heuveltje op.
      </Paragraph>

      <form className="utrecht-form" method="GET" action="/savi/form/bevestiging/">
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="1111">Aanhanger/bakfiets</FormLabel>
          </Paragraph>
          <Paragraph>
            <Select size={10} id="1111" name="aanhanger bakfiets">
              <SelectOption disabled selected value="--- Toon alle aanhangers/bakfietsen ---">
                --- Toon alle aanhangers/bakfietsen ---
              </SelectOption>
              <SelectOption value="a">Aanhanger 1Tractieweg</SelectOption>
              <SelectOption value="b">Aanhanger De Stits</SelectOption>
              <SelectOption value="c">Aanhanger Lunetten</SelectOption>
              <SelectOption value="d">Bakfiets De Stits</SelectOption>
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
          <Button appearance="primary-action-button" type="submit">
            Bekijk schema
          </Button>
          <Button appearance="secondary-action-button" type="reset" name="clear">
            Wissen
          </Button>
        </ButtonGroup>
      </form>
    </Page>
  );
}
