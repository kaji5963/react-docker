import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  imageUrl: string;
  userName: string;
  age: number;
};

export const UserCard: FC<Props> = memo(({ imageUrl, userName, age }) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image boxSize="160px" borderRadius="full" src={imageUrl} alt={userName} m="auto" />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {`${age}歳`}
        </Text>
      </Stack>
    </Box>
  );
});