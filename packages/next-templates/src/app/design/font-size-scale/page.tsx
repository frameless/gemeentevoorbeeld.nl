'use client';
import {
  Article,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Page,
  Icon,
  PageContent,
  Paragraph,
} from '@utrecht/component-library-react';
import { IconTextSize } from '@tabler/icons-react';
import '../design.scss';

export default function Home() {
  return (
    <Page className="voorbeeld-page--flex">
      <PageContent>
        <div>
          <Heading1>Font size scale</Heading1>
          <Paragraph>Tip: you can use 1: when you choose 19px or large as your minimum font-size</Paragraph>
          <hr />
          <div className="frameless-font-scale frameless-font-size-scale-figure">
            <Heading1>The quick brown fox</Heading1>
            <Heading2>The quick brown fox</Heading2>
            <Heading3>The quick brown fox</Heading3>
            <Heading4>The quick brown fox</Heading4>
            <Heading5>The quick brown fox</Heading5>
            <Heading6>The quick brown fox</Heading6>
            <Paragraph lead>The quick brown fox</Paragraph>
            <Paragraph>The quick brown fox</Paragraph>
          </div>
          <hr />
          <div className="frameless-font-scale frameless-font-size-scale-figure">
            <Heading1>
              <Icon>
                <IconTextSize />
              </Icon>
              The quick brown fox
            </Heading1>
            <Heading2>
              <Icon>
                <IconTextSize />
              </Icon>
              The quick brown fox
            </Heading2>
            <Heading3>
              <Icon>
                <IconTextSize />
              </Icon>
              The quick brown fox
            </Heading3>
            <Heading4>
              <Icon>
                <IconTextSize />
              </Icon>
              The quick brown fox
            </Heading4>
            <Heading5>
              <Icon>
                <IconTextSize />
              </Icon>
              The quick brown fox
            </Heading5>
            <Heading6>
              <Icon>
                <IconTextSize />
              </Icon>
              The quick brown fox
            </Heading6>
            <Paragraph lead>
              <Icon>
                <IconTextSize />
              </Icon>
              The quick brown fox
            </Paragraph>
            <Paragraph>
              <Icon>
                <IconTextSize />
              </Icon>
              The quick brown fox
            </Paragraph>
          </div>
        </div>
      </PageContent>
    </Page>
  );
}
