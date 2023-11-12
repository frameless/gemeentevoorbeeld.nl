'use client';

import {
  UtrechtArticle,
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtForm,
  UtrechtFormFieldTextarea,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import { ExampleHeaderFunnel } from '@/components/ExampleHeader/ExampleHeaderFunnel/ExampleHeaderFunnel';
import { ExampleFooter } from '@/components/ExampleFooter/ExampleFooter';
import {
  FormLabel,
  UnorderedList,
  UnorderedListItem,
  PreHeading,
  HeadingGroup,
} from '@utrecht/component-library-react';
import ArrowLeft from '../../../styling/assets/arrow-left-icon.svg';
import '@/app/styling/css/wmebv.css';
import { useForm } from 'react-hook-form';

export default function home() {
  const storedFormData = sessionStorage.getItem('wmebv');
  const defaultValues = storedFormData && JSON.parse(storedFormData);

  const {
    getValues,
    register,
    formState: { errors },
  } = useForm({ defaultValues });

  const saveFormData = () => sessionStorage.setItem('wmebv', JSON.stringify(getValues()));
  const deleteFormData = () => sessionStorage.removeItem('wmebv');

  return (
    <UtrechtPage>
      <ExampleHeaderFunnel />
      <UtrechtPageContent className="voorbeeld-page-content-flex">
        <UtrechtArticle className="voorbeeld-article-space ">
          <form method="POST" action="/api/wmebv/anonymous/step1" onSubmit={saveFormData}>
            <UtrechtButtonGroup>
              <UtrechtLink href="/wmebv/Inloggen">
                <ArrowLeft /> Terug
              </UtrechtLink>
            </UtrechtButtonGroup>
            <HeadingGroup>
              <UtrechtHeading1>Vraag aan de gemeente</UtrechtHeading1>
              <PreHeading className="voorbeeld-paragraph-spacing-stapx">Stap 1 van 4</PreHeading>
            </HeadingGroup>
            <UtrechtHeading2 className="voorbeeld-heading-spacing">Uw vraag</UtrechtHeading2>
            <UtrechtForm>
              <FormLabel>Stel uw vraag</FormLabel>
              <UtrechtFormFieldTextarea />
            </UtrechtForm>
            <div className="voorbeeld-bijlage-flex-container">
              <UtrechtParagraph className="voorbeeld-paragraph-bijlage">Bestand toevoegen</UtrechtParagraph>
              <UtrechtParagraph>(Niet verplicht)</UtrechtParagraph>
            </div>
            <UnorderedList className="voorbeeld-unordered-list-space">
              <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
              <UnorderedListItem>U mag maximaal 10 Mb aan bestanden toevoegen.</UnorderedListItem>
              <UnorderedListItem>
                Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
              </UnorderedListItem>
            </UnorderedList>
            <div className="voorbeeld-bijlage-flex-container">
              <UtrechtButton appearance="secondary-action-button" className="voorbeeld-button-spacing-bestand-kiezen">
                Bestand kiezen
              </UtrechtButton>
              <UtrechtParagraph className="paragraph-space-bijlagen">Geen bestand gekozen</UtrechtParagraph>
            </div>
            <UtrechtButtonGroup className="utrecht-button-group--example-column">
              <UtrechtButton type="submit" className="voorbeeld-button-spacing" appearance="primary-action-button">
                Volgende stap
              </UtrechtButton>
              <UtrechtButton
                type="submit"
                appearance="subtle-button"
                className="voorbeeld-button-link"
                formAction="/api/wmebv/save"
                formMethod="POST"
                onSubmit={saveFormData}
              >
                Opslaan en later verder
              </UtrechtButton>
              <UtrechtButton
                type="submit"
                appearance="subtle-button"
                className="voorbeeld-button-link"
                onClick={deleteFormData}
                formAction="/wmebv"
              >
                Sluit formulier
              </UtrechtButton>
            </UtrechtButtonGroup>
          </form>
        </UtrechtArticle>
      </UtrechtPageContent>
      <ExampleFooter />
    </UtrechtPage>
  );
}
