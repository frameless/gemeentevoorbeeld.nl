'use client';

import { UtrechtArticle, UtrechtPage, UtrechtPageContent,UtrechtButton, UtrechtForm, UtrechtHeading, UtrechtHeading2, UtrechtLink, UtrechtParagraph, UtrechtTextbox } from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { FormLabel,  } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
    return (
        <UtrechtPage>
      <UtrechtPageContent>
        <UtrechtArticle>
        <UtrechtHeading>Vraag aan de gemeente</UtrechtHeading> 
        <UtrechtParagraph lead>Stap 2 van 4</UtrechtParagraph>
        <UtrechtHeading2>Uw Gegevens</UtrechtHeading2>
        <UtrechtParagraph>Om u zo goed mogelijk te kunnen helpen, ontvangen we graag uw contactgegevens. Deze gegevens worden niet met anderen gedeeld.</UtrechtParagraph>
        <UtrechtForm>
        <FormLabel>Naam</FormLabel>
        <UtrechtTextbox/>
        </UtrechtForm>
        <UtrechtForm>
        <FormLabel>Straat</FormLabel>
        <UtrechtTextbox/>
        </UtrechtForm>
        <UtrechtForm>
        <FormLabel>Huisnummer</FormLabel>
        <UtrechtTextbox/>
        </UtrechtForm>
        <UtrechtForm>
        <FormLabel>Toevoeging</FormLabel>
        <UtrechtTextbox/>
        </UtrechtForm>
        <UtrechtForm>
        <FormLabel>Postcode</FormLabel>
        <UtrechtTextbox/>
        </UtrechtForm>
        <UtrechtForm>
        <FormLabel>Woonplaats</FormLabel>
        <UtrechtTextbox/>
        </UtrechtForm>
        <UtrechtForm>
        <FormLabel>E-mailadres</FormLabel>
        <UtrechtTextbox/>
        </UtrechtForm>
        <UtrechtForm>
        <FormLabel>Telefoonnummer</FormLabel>
        <UtrechtTextbox/>
        </UtrechtForm>
        <UtrechtButton>Volgende stap</UtrechtButton>
        <UtrechtLink>Opslaan en later verder</UtrechtLink>
        <UtrechtLink>Sluit formulier</UtrechtLink> 
        </UtrechtArticle>
      </UtrechtPageContent> 
      </UtrechtPage>


        );
    }
    