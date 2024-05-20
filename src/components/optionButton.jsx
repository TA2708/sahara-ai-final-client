import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { BsThreeDotsVertical, BsChatSquareQuote } from "react-icons/bs";
import { RiVoiceprintFill} from "react-icons/ri";
import { CiMicrophoneOn  } from "react-icons/ci";
import { MdVoiceChat } from "react-icons/md";

export default function OptionButton() {
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" mt={0}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<BsThreeDotsVertical />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<CiMicrophoneOn  />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
              >
                Speech To Text
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<BsChatSquareQuote />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="blue"
                fontSize="sm"
              >
                Text To Text
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<MdVoiceChat  />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="blue"
                fontSize="sm"
              >
                Text To Speech
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<RiVoiceprintFill  />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="blue"
                fontSize="sm"
              >
                Speech To Speech
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
