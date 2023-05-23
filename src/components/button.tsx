import { Box, IButtonProps, Button as NBButton, Text } from "native-base";

type ButtonProps = IButtonProps & {
  children: string;
};

export const Button = ({
  children,
  color = "white",
  ...props
}: ButtonProps) => (
  <NBButton
    {...props}
    bg="brand.medium"
    flex="1"
    minHeight="56px"
    maxHeight="56px"
    _loading={{ opacity: 1 }}
    _pressed={{
      bg: "brand.medium",
      opacity: 0.7,
    }}
  >
    <Text color={color} fontSize="md" fontFamily="bold">
      {children}
    </Text>
  </NBButton>
);
