import {
  HiMiniArrowLeftEndOnRectangle,
  HiMiniBell,
  HiMiniCalendar,
  HiMiniChatBubbleOvalLeft,
  HiMiniChevronLeft,
  HiMiniChevronRight,
  HiMiniEnvelope,
  HiMiniEye,
  HiMiniEyeSlash,
  HiMiniHeart,
  HiMiniHome,
  HiMiniLink,
  HiMiniLockClosed,
  HiMiniMagnifyingGlass,
  HiMiniPencil,
  HiMiniPhone,
  HiMiniPhoto,
  HiMiniUser,
  HiMiniXMark,
} from "react-icons/hi2";

type Props = {
  type:
    | "close"
    | "envelope"
    | "user"
    | "openedEye"
    | "closedEye"
    | "lock"
    | "photo"
    | "link"
    | "leftArrow"
    | "rightArrow"
    | "chat"
    | "heart"
    | "pen"
    | "calendar"
    | "phone"
    | "exit"
    | "home"
    | "search"
    | "bell";
};

export default function Icon({ type }: Props) {
  const icons = {
    close: <HiMiniXMark />,
    envelope: <HiMiniEnvelope />,
    user: <HiMiniUser />,
    openedEye: <HiMiniEye />,
    closedEye: <HiMiniEyeSlash />,
    lock: <HiMiniLockClosed />,
    photo: <HiMiniPhoto />,
    link: <HiMiniLink />,
    leftArrow: <HiMiniChevronLeft />,
    rightArrow: <HiMiniChevronRight />,
    chat: <HiMiniChatBubbleOvalLeft />,
    heart: <HiMiniHeart />,
    pen: <HiMiniPencil />,
    calendar: <HiMiniCalendar />,
    phone: <HiMiniPhone />,
    exit: <HiMiniArrowLeftEndOnRectangle />,
    home: <HiMiniHome />,
    search: <HiMiniMagnifyingGlass />,
    bell: <HiMiniBell />,
  };

  return icons[type];
}
