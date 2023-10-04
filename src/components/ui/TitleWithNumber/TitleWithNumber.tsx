import './TitleWithNumber.scss';

import { FC } from 'react';

type Props = {
  number: string;
  title: string;
};

export const TitleWithNumber: FC<Props> = ({ number, title }) => {
  return (
    <div className="title">
      <div className="title__number">{number}</div>

      <div className="title__text">{title}</div>
    </div>
  );
};
