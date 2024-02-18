'use client';

import { Heading1, Page, Icon, PageContent } from '@utrecht/component-library-react';
import { TopTaskNavigation } from '@/components/TopTask/TopTaskNavigation';
import { TopTaskLink } from '@/components/TopTask/TopTaskLink';
import {
  IconColorSwatch,
  IconCrosshair,
  IconFocusCentered,
  IconForms,
  IconLineHeight,
  IconPalette,
  IconPointer,
  IconTextSize,
} from '@tabler/icons-react';
import './design.scss';

export default function Home() {
  return (
    <Page className="voorbeeld-page--flex">
      <PageContent>
        <Heading1>Design playground</Heading1>
        <TopTaskNavigation className="grid">
          <TopTaskLink
            icon={
              <Icon>
                <IconTextSize />
              </Icon>
            }
            href="/design/font-size-scale"
          >
            Font size scale
          </TopTaskLink>
          <TopTaskLink
            icon={
              <Icon>
                <IconPalette />
              </Icon>
            }
            href="/design/brand-color"
          >
            Brand colors
          </TopTaskLink>
          <TopTaskLink
            icon={
              <Icon>
                <IconColorSwatch />
              </Icon>
            }
            href="/design/common-color"
          >
            Colors meanings
          </TopTaskLink>
          <TopTaskLink
            icon={
              <Icon>
                <IconLineHeight />
              </Icon>
            }
            href="/design/line-height"
          >
            Line height
          </TopTaskLink>
          <TopTaskLink
            icon={
              <Icon>
                <IconForms />
              </Icon>
            }
            href="/design/form"
          >
            Form components
          </TopTaskLink>
          <TopTaskLink
            icon={
              <Icon>
                <IconFocusCentered />
              </Icon>
            }
            href="/design/hover"
          >
            Focus effect
          </TopTaskLink>
          <TopTaskLink
            icon={
              <Icon>
                <IconPointer />
              </Icon>
            }
            href="/design/hover"
          >
            Pointer hover effect
          </TopTaskLink>
          <TopTaskLink
            icon={
              <Icon>
                <IconCrosshair />
              </Icon>
            }
            href="/design/pointer-target-size"
          >
            Pointer target size
          </TopTaskLink>
        </TopTaskNavigation>
      </PageContent>
    </Page>
  );
}
