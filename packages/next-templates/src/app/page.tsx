'use client';
import { Button, Link, PageHeader, Textbox } from '@utrecht/component-library-react';
import Logo from './styling/voorbeeld.svg';

export default function Home() {
  return (
    <main className="voorbeeld-theme">
      <PageHeader>
        {/* SVGR gebruiken ipv react-component*/}
        <Logo />
        <Link>Mijn omgeving</Link>
        <Link>Contact</Link>
        <Textbox placeholder="Bijvoorbeeld zwembad of grofvuil" />
        <Button>Zoeken</Button>
      </PageHeader>
    </main>
  );
}
