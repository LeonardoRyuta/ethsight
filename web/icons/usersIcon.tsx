import { FiUsers } from "react-icons/fi";

export default function UsersIcon({ size, extraStyles, onClick }: any) {
  return (
    <FiUsers
      style={{
        fontSize: size,
        ...extraStyles,
      }}
      onClick={onClick}
    />
  );
}