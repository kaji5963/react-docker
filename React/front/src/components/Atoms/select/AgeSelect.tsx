import { FC, memo } from 'react';
import { Select } from '@chakra-ui/react';
import { ageData } from '../../../data/ageData';

type Props = {
  onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
};

export const AgeSelect: FC<Props> = memo(({ onChange }) => {
  return (
    <Select bg="gray.100" placeholder="age" onChange={onChange}>
      {ageData().map((age) => {
        return (
          <option key={age.value} value={age.value}>
            {age.value}
          </option>
        );
      })}
    </Select>
  );
});
