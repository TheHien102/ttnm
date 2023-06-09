import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { zoomIn } from 'react-animations';
import { BiSearchAlt } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';

export const CreateGroupModal = styled.div`
  ${tw`flex fixed top-0 left-0 bottom-0 right-0 z-30`}
`;

export const CreateGroupOverlay = styled.div`
  ${tw`absolute bg-[#00000080] h-full w-full`}
`;

const zoomInAnimate = keyframes`${zoomIn}`;

export const CreateGroupBody = styled.div`
  ${tw`m-auto bg-quaternary py-2.5 px-3.5 rounded-[25px] z-10 max-w-[700px] w-full`}
  border: 2px solid #ECF2F7;
  animation: 0.25s ${zoomInAnimate};
`;

export const CreateGroupTitle = styled.div`
  ${tw`text-2xl font-semibold mb-3 ml-1 text-white`}
`;

export const CreateGroupSearch = styled.div<{ noAdded: boolean }>`
  ${tw`relative w-full flex items-center mb-4`}
  ${({ noAdded }) => !noAdded && tw`mb-0`}
`;
export const CreateGroupSearchInput = styled.input<{ noAdded: boolean }>`
  ${tw`border-quaternary border-2 rounded-[10px] pr-2 pl-9 py-2 w-full`}
  outline: none;
`;

export const CreateGroupSearchIcon = styled(BiSearchAlt)`
  ${tw`absolute hover:cursor-pointer text-[28px] text-[#002B98] ml-1.5 left-0`}
`;

export const CreateGroupAddedUsers = styled.div`
  ${tw`flex overflow-hidden my-2 items-center`}
`;

export const CreateGroupAddedUsersInner = styled.div`
  ${tw`flex w-0 flex-grow overflow-auto rounded-b-[20px]`}
  &::-webkit-scrollbar-track {
    ${tw`bg-transparent rounded-[10px]`}
  }

  &::-webkit-scrollbar {
    ${tw`h-[3px]`}
  }

  &::-webkit-scrollbar-thumb {
    ${tw`bg-tertiary rounded-[50px]`}
  }
`;

export const CreateGroupSubmit = styled.div`
  ${tw`text-primary ml-1 p-2 rounded-[20px] hover:cursor-pointer`}
`;

export const CreateGroupAddedUser = styled.span`
  ${tw`relative ml-1 mr-2 my-1 bg-secondary p-1 rounded-[10px] flex items-center`}
`;

export const CreateGroupAddedUserName = styled.span`
  ${tw`ml-2 w-[100px] font-semibold overflow-ellipsis overflow-hidden whitespace-nowrap mr-1`}
`;

export const CreateGroupAddedUserAvatar = styled.figure`
  ${tw`relative w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0`}
  border: 1px solid gray;
`;

export const CreateGroupAddedUserRemove = styled(MdCancel)`
  ${tw`absolute transition-colors bg-white rounded-full text-red-400 text-[20px] hover:text-red-500 hover:cursor-pointer right-[-5px] top-[-2px]`}
`;

export const GreateGroupList = styled.div`
  ${tw`max-h-[60vh] overflow-y-auto pr-1`}
  &::-webkit-scrollbar-track {
    ${tw`bg-transparent rounded-[10px]`}
  }

  &::-webkit-scrollbar {
    ${tw`w-[5px]`}
  }

  &::-webkit-scrollbar-thumb {
    ${tw`bg-tertiary rounded-[50px]`}
  }
`;

export const CreateGroupItem = styled.div`
  ${tw`relative flex flex-grow my-1 p-2 items-center border-b-[2px] justify-between`}
`;

export const CreateGroupInfo = styled.div`
  ${tw`flex flex-grow items-center hover:cursor-pointer`}
`;

export const CreateGroupAvatar = styled.figure`
  ${tw`relative w-[60px] h-[60px] rounded-lg overflow-hidden flex-shrink-0`}
  border: 1px solid #eee;
`;

export const CreateGroupName = styled.div`
  ${tw`flex-grow font-semibold text-[18px] overflow-ellipsis ml-3.5`}
`;

export const CreateGroupAdd = styled.div`
  ${tw`text-primary bg-quaternary rounded-[10px] font-semibold text-sm px-5 py-2 ml-1 hover:opacity-100 hover:cursor-pointer opacity-90`}
`;

export const CreateGroupAdded = styled.div`
  ${tw`text-primary bg-gray-500 rounded-[10px] font-semibold text-sm px-5 py-2 ml-1 hover:cursor-default`}
`;
