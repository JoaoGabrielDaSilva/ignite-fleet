import { Box, IBoxProps, Text, useToken } from "native-base";
import { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";

type TextAreaInputProps = IBoxProps & {
  label: string;
  inputProps?: TextInputProps;
};

export const TextAreaInput = forwardRef<TextInput, TextAreaInputProps>(
  ({ label, inputProps, ...props }, ref) => {
    const [placeholderTextColor, color] = useToken("colors", [
      "gray.400",
      "gray.300",
    ]);
    return (
      <Box w="full" bg="gray.700" p="4" rounded="md" h="150px" {...props}>
        <Text mb="4" color="gray.300" fontSize="sm" fontFamily="regular">
          {label}
        </Text>
        <TextInput
          ref={ref}
          style={{
            color,
            flex: 1,
          }}
          textAlignVertical="top"
          placeholderTextColor={placeholderTextColor}
          multiline
          {...inputProps}
        />
      </Box>
    );
  }
);
