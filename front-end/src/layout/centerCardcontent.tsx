import {
  Stack,
  Box,
  Avatar,
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";
import moment from "moment";

export interface ThreadCards {
  id?: number;
  user?: User;
  image?: string;
  content?: string;
  posted?: string;
  likeButton?: string;
  repliesButton?: string;
}
export interface User {
  fullName?: string;
  userName?: string;
  profil_picture?: string;
  password?: string;
}
export default function CenterCardcontent(props: ThreadCards) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showImage, setImage] = useState<boolean>(true);
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const LikeButton = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };
  const transparent = { bg: "transparent" };
  return (
    <>
      <Stack mt={0} direction={"row"} spacing={4} align={"center"} w={"100%"}>
        <Stack direction={"column"} spacing={0} fontSize={"sm"} w={"510px"}>
          <Box>
            <Avatar src={props.user?.profil_picture} />
            <Text display={"inline"} ms={"10px"}>
              {" "}
              {props.user?.fullName} &#9679;{" "}
            </Text>
            <Text display={"inline"} ms={"15px"} color={"gray.500"}>
              @{props.user?.userName}
            </Text>
            <Text display={"inline"} ms={"15px"} color={"gray.500"}>
              {" "}
              {moment(props.posted).startOf("minute").fromNow()}{" "}
            </Text>
          </Box>
          <Text marginStart={"60px"} w={"80%"} color={"gray.600"} mt={-6}>
            {" "}
            {props?.content}{" "}
          </Text>
          {showImage && (
            <>
              <Image
                w={"80%"}
                h={"100%"}
                ms={"60px"}
                borderRadius={5}
                src={props.image}
                onError={() => setImage(false)}
                onClick={onOpen}
                cursor={"pointer"}
              ></Image>

              <Modal isOpen={isOpen} size={"2xl"} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton color={"white"} bg={"gray"} />
                  <ModalBody>
                    <Image
                      // w={"100%"}
                      // h={"100%"}
                      src={props.image}
                      onError={() => setImage(false)}
                    ></Image>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          )}
          <Box
            display={"flex"}
            textAlign={"center"}
            mt={3}
            ms={"60px"}
            mb={8}
            gap={"76px"}
          >
            <Button
              onClick={LikeButton}
              display={"flex"}
              gap={2}
              {...transparent}
            >
              {" "}
              <FaHeart color={isLike ? "red" : "gray"} />
              {like}
              {props?.likeButton}{" "}
            </Button>
            <Link to={"/detail/" + props.id}>
              {" "}
              <Button display={"flex"} gap={"10px"} {...transparent}>
                {" "}
                {props?.repliesButton}{" "}
                <BiCommentDetail display={"flex"} gap={"10px"} /> replies
              </Button>
            </Link>
            <Button display={"flex"} gap={"10px"} {...transparent}>
              {" "}
              share <PiShareFatBold />{" "}
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
