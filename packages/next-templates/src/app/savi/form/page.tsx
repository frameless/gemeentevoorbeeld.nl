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

export default function Home() {
  return (
    <Page>
      <Heading3>Beschikbaarheid</Heading3>
      <Paragraph>
        Staat op een bepaalde locatie de bakfiets of aanhanger er niet bij dan is deze in reparatie. <br />
        Voor de bakfiets geldt, zorg dat u deze niet te zwaar belaadt. Om het afvalstation te bereiken moet u namelijk
        een heuveltje op.
      </Paragraph>

      <form className="utrecht-form" method="GET" action="/savi/form/bevestiging" required>
        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="1111">Aanhanger/bakfiets</FormLabel>
          </Paragraph>
          <Paragraph>
            <Select size={10} id="1111" name="aanhanger bakfiets" required>
              <SelectOption disabled selected value="--- Toon alle aanhangers/bakfietsen ---">
                --- Toon alle aanhangers/bakfietsen ---
              </SelectOption>

              <SelectOption value="Aanhanger 1Tractieweg">Aanhanger 1Tractieweg</SelectOption>
              <SelectOption value="Aanhanger De Stits">Aanhanger De Stits</SelectOption>
              <SelectOption value="Aanhanger Lunetten">Aanhanger Lunetten</SelectOption>
              <SelectOption value="Bakfiets De Stits">Bakfiets De Stits</SelectOption>
              <SelectOption value="Bakfiets Tractieweg">Bakfiets Tractieweg</SelectOption>
            </Select>
          </Paragraph>

          {/* <Paragraph>
            <label for="1112">Aanhanger/bakfiets</label>
          </Paragraph>
          <Paragraph>
            <select size="10" id="1112" name="aanhangerbakfiets" required>
              <option disabled value="--- Toon alle aanhangers/bakfietsen ---">
                --- Toon alle aanhangers/bakfietsen ---
              </option>

              <option value="a">Aanhanger 1Tractieweg</option>
              <option value="b">Aanhanger De Stits</option>
              <option value="c">Aanhanger Lunetten</option>
              <option value="d">Bakfiets De Stits</option>
            </select>
          </Paragraph> */}
        </FormField>

        <FormField type="text">
          <Paragraph>
            <FormLabel htmlFor="2222">Datum</FormLabel>
          </Paragraph>
          <Paragraph>
            <Textbox id="2222" name="datums beschikbaarheid" type="date" autoComplete="off" required />
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
