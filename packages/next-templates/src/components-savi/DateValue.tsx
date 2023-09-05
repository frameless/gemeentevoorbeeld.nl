import { HTMLAttributes, PropsWithChildren } from 'react';

interface DateValueProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  dateTime: string;
  locale: string;
}
export const DateValue = ({ dateTime, locale }: DateValueProps) => (
  <time dateTime={dateTime}>
    {new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(dateTime))}
  </time>
);

DateValue.displayName = 'DateValue';
