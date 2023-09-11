interface Props {
  title: string;
}

export const EmptyIndicator = ({ title }: Props) => {
  // TODO: make sure the empty indicator is understandable for screenreader users
  return <span title={title}>-</span>;
};
