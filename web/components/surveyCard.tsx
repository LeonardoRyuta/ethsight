import { Box, HStack, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { ClockIcon, UsersIcon, ThreeDotsIcon } from "../icons";
import Link from "next/link";

export default function SurveyCard({ survey }: { survey: any }) {

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  }

  return (
    <div className="min-w-80">
      <div className="border-2 border-black rounded-lg p-4 my-2 flex flex-col gap-4">
        <div>
          <HStack justifyContent="space-between">
            <Link href={"survey/" + survey.address}>
              <h1 className="text-2xl font-bold hover:underline cursor-pointer">{survey.name}</h1>
            </Link>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<ThreeDotsIcon />}
                variant='outline'
              />
              <MenuList>
                <MenuItem>Share</MenuItem>
                <MenuItem>Copy</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <p className="opacity-50 text-xs">By: {survey.author.substring(0, 6)}...{survey.author.substring(survey.author.length - 4, survey.author.length)}</p>
        </div>
        <div className="flex justify-between">
          <p>Questions: {survey.questions.length}</p>
          <p>Pool: {survey.pool}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <UsersIcon size={20} extraStyles={{ marginRight: "5px" }} />
          <p>{survey.participants}</p>
        </div>
        <div className="flex items-center">
          <ClockIcon size={20} extraStyles={{ marginRight: "5px" }} />
          <p>{survey.time}</p>
        </div>
      </div>

    </div>
  );
}