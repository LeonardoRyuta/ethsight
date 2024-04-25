import { FiClock } from "react-icons/fi";

export default function ClockIcon({ size, extraStyles, onClick }: any) {
  return (
    <FiClock
      style={{
        fontSize: size,
        ...extraStyles,
      }}
      onClick={onClick}
    />
  );
}