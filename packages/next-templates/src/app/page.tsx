'use client';
import { Button, Link, PageHeader, Textbox } from '@utrecht/component-library-react';

export default function Home() {
  return (
    <main className="voorbeeld-theme">
      <PageHeader>
        {/* SVGR gebruiken ipv react-component*/}

        <Link>Mijn omgeving</Link>
        <Link>Contact</Link>
        <Textbox placeholder="Bijvoorbeeld zwembad of grofvuil" />
        <Button>Zoeken</Button>
      </PageHeader>
    </main>
  );
}
