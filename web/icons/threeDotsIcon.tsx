import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

export default function ThreeDotsIcon({ size, extraStyles, onClick }: any) {
  return (
    <PiDotsThreeOutlineVerticalFill
      style={{
        fontSize: size,
        ...extraStyles,
      }}
      onClick={onClick}
    />
  );
}