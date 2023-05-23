import { Box, IBoxProps, Text, useToken } from "native-base";
import { TextInput, TextInputProps } from "react-native";

type LicensePlateInputProps = IBoxProps & {
  label: string;
  inputProps?: TextInputProps;
};

export const LicensePlateInput = ({
  label,
  inputProps,
  ...props
}: LicensePlateInputProps) => {
  const [placeholderTextColor, color] = useToken("colors", [
    "gray.400",
    "gray.300",
  ]);

  const [fontFamily] = useToken("fonts", ["bold"]);
  const [fontSize] = useToken("fontSizes", ["xxxl"]);

  return (
    <Box w="full" bg="gray.700" p="4" rounded="md" {...props}>
      <Text color="gray.300" fontSize="sm" fontFamily="regular">
        {label}
      </Text>
      <Box py="4">
        <TextInput
          {...inputProps}
          style={{
            color,
            fontFamily,
            fontSize,
          }}
          maxLength={7}
          textAlign="center"
          autoCapitalize="characters"
          placeholderTextColor={placeholderTextColor}
        />
      </Box>
    </Box>
  );
};
