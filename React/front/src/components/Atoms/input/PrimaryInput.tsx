import { FC, memo } from 'react';
import { Input } from '@chakra-ui/react';

type Props = {
  bg?: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: any) => void;
};

export const PrimaryInput: FC<Props> = memo(({ bg = '', placeholder = '', value, onChange }) => {
  return (
    <>
      <Input bg={bg} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
});
