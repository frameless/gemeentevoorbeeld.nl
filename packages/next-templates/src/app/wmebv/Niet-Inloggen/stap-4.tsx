'use client';

import { UtrechtArticle, UtrechtButton, UtrechtForm, UtrechtFormFieldDescription, UtrechtFormFieldTextarea, UtrechtHeading, UtrechtLink, UtrechtPage, UtrechtPageContent, UtrechtParagraph } from '@utrecht/web-component-library-react';
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

                </UtrechtArticle>
            </UtrechtPageContent>
        </UtrechtPage>

        );
    }