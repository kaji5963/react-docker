import { FC, memo, useState } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { PrimaryInput } from '../Atoms/input/PrimaryInput';
import { AgeSelect } from '../Atoms/select/AgeSelect';
import { PrimaryButton } from '../Atoms/button/PrimaryButton';
import { WrapUserList } from './user/WrapUserList';
import { LoadingSpinner } from '../molecules/LoadingSpinner';
import { useSearchUsers } from '../../hooks/useSearchUsers';

type Search = {
  name: string;
  age: string;
};

export const SearchCard: FC = memo(() => {
  const { search, searchResult, loading } = useSearchUsers();
  const [searchParams, setSearchParams] = useState<Search>({
    name: '',
    age: '',
  });

  return (
    <>
      <Flex align="center" justify="center" my={10}>
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Stack spacing={6} px={4} py={4}>
            <PrimaryInput
              bg="gray.100"
              placeholder="name"
              value={searchParams.name}
              onChange={(e) => setSearchParams({ ...searchParams, name: e.target.value })}
            />
            <AgeSelect
              onChange={(e) => setSearchParams({ ...searchParams, age: e.target.value })}
            />
            <PrimaryButton onClick={() => search(searchParams)}>search</PrimaryButton>
          </Stack>
        </Box>
      </Flex>

      {loading ? <LoadingSpinner /> : <WrapUserList users={searchResult} />}
    </>
  );
});
