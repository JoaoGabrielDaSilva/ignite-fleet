import { Center, Spinner } from "native-base";

export const Loading = () => {
  return (
    <Center flex="1" bg="gray.800">
      <Spinner color="brand.light" />
    </Center>
  );
};
