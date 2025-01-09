import { SyntheticEvent, useState } from "react";

export const usePopoverHandler = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: SyntheticEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const isPopoverOpen = Boolean(anchorEl);

  return { anchorEl, isPopoverOpen, handlePopoverOpen, handlePopoverClose };
};
