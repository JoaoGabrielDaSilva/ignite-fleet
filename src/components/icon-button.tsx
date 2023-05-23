import {
  IButtonProps,
  IIconButtonProps,
  IconButton as NBIconButton,
  Text,
} from "native-base";

export const IconButton = ({ ...props }: IIconButtonProps) => (
  <NBIconButton
    variant="unstyled"
    bg="gray.700"
    _pressed={{ opacity: 0.7 }}
    {...props}
  />
);
