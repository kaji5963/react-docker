import { FC, memo } from 'react';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

type Props = {
  onChange: (nextValue: string) => void;
  value: string;
};

export const SexRadio: FC<Props> = memo(({ onChange, value }) => {
  return (
    <RadioGroup onChange={onChange} value={value}>
      <Stack direction="row">
        <Radio value="男性">男性</Radio>
        <Radio value="女性">女性</Radio>
      </Stack>
    </RadioGroup>
  );
});
