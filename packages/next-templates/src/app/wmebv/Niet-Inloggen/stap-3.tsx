'use client';

import { UtrechtArticle, UtrechtPage, UtrechtPageContent, UtrechtButton, UtrechtDataList, UtrechtDataListKey, UtrechtDataListValue, UtrechtForm, UtrechtFormFieldDescription, UtrechtFormFieldTextarea, UtrechtHeading, UtrechtHeading2, UtrechtHeading3, UtrechtLink, UtrechtParagraph } from '@utrecht/web-component-library-react';
import { ExampleHeaderWmebv } from '@/components/ExampleHeader/wmebv/ExampleHeaderWmebv';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import { ExampleNavigation } from '@/components/ExampleNavigation/ExampleNavigation';
import { FormField, FormLabel, UnorderedList } from '@utrecht/component-library-react';
import '@/app/styling/css/wmebv.css';

export default function home() {
    return (
        <UtrechtPage>
            <UtrechtPageContent>
                <UtrechtArticle>
                    <UtrechtHeading>Vraag aan de gemeente</UtrechtHeading>
                    <UtrechtParagraph lead>Stap 3 van 4</UtrechtParagraph>
                    <UtrechtHeading2>Controleer uw gegevens</UtrechtHeading2>
                    <UtrechtHeading3>Uw vraag</UtrechtHeading3>
                    <UtrechtLink>Aanpassen</UtrechtLink>
                    <UtrechtDataList>
                        <UtrechtLink>Aanpassen</UtrechtLink>
                        <UtrechtDataListKey>Uw vraag</UtrechtDataListKey>
                        <UtrechtDataListValue>Beste meneer of mevrouw,
                            4 weken geleden een aanvraag voor bijstandsuitkering gedaan maar ik heb nog steeds niets gehoord. Ik wil graag dat u dit oplost.
                            endelijke groet,Jeroen van Drouwen
                        </UtrechtDataListValue>
                    </UtrechtDataList>
                    <UtrechtHeading3>Uw gegevens</UtrechtHeading3>
                    <UtrechtLink>Aanpassen</UtrechtLink>
                    <UtrechtDataList>
                        <UtrechtDataListKey>Naam</UtrechtDataListKey>
                        <UtrechtDataListValue>Jeroen van Drouwen</UtrechtDataListValue>
                    </UtrechtDataList>
                    <UtrechtDataList>
                        <UtrechtDataListKey>Straat</UtrechtDataListKey>
                        <UtrechtDataListValue>Laan der voorbeelden</UtrechtDataListValue>
                    </UtrechtDataList>
                    <UtrechtDataList>
                        <UtrechtDataListKey>Huisnummer</UtrechtDataListKey>
                        <UtrechtDataListValue>99</UtrechtDataListValue>
                    </UtrechtDataList>
                    <UtrechtDataList>
                        <UtrechtDataListKey>Postcode</UtrechtDataListKey>
                        <UtrechtDataListValue>1024VP</UtrechtDataListValue>
                    </UtrechtDataList>
                    <UtrechtDataList>
                        <UtrechtDataListKey>Woonplaats</UtrechtDataListKey>
                        <UtrechtDataListValue>Voorbeekd</UtrechtDataListValue>
                    </UtrechtDataList>
                    <UtrechtDataList>
                        <UtrechtDataListKey>E-mailadres</UtrechtDataListKey>
                        <UtrechtDataListValue>j.vandrouwen@gmail.com</UtrechtDataListValue>
                    </UtrechtDataList>
                    <UtrechtDataList>
                        <UtrechtDataListKey>Telefoonnummer</UtrechtDataListKey>
                        <UtrechtDataListValue>0650618346</UtrechtDataListValue>
                    </UtrechtDataList>
                    <UtrechtButton>Versturen</UtrechtButton>
                </UtrechtArticle>
            </UtrechtPageContent>
        </UtrechtPage>
 );
    }