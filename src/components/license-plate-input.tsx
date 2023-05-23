import { forwardRef } from "react";
import { Box, IBoxProps, Text, useToken } from "native-base";
import { TextInput, TextInputProps } from "react-native";

type LicensePlateInputProps = TextInputProps & {
  label: string;
  containerProps?: IBoxProps;
};

export const LicensePlateInput = forwardRef<TextInput, LicensePlateInputProps>(
  ({ label, containerProps, ...props }, ref) => {
    const [placeholderTextColor, color] = useToken("colors", [
      "gray.400",
      "gray.300",
    ]);

    const [fontFamily] = useToken("fonts", ["bold"]);
    const [fontSize] = useToken("fontSizes", ["xxxl"]);

    return (
      <Box w="full" bg="gray.700" p="4" rounded="md" {...containerProps}>
        <Text color="gray.300" fontSize="sm" fontFamily="regular">
          {label}
        </Text>
        <Box py="4">
          <TextInput
            ref={ref}
            {...props}
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
  }
);
