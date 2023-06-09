import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { merge, zoomIn, slideInRight, slideInDown } from 'react-animations';
import { AiOutlineEdit } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';

const cbAnimate1 = merge(slideInRight, slideInDown);
const MoreOptionAnimate = keyframes`${slideInRight}`;

export const MoreOptions = styled.div<{ toggleOption: boolean }>`
  ${tw`bg-secondary absolute shadow-md z-30 right-[-320px] h-full w-[320px] duration-300 overflow-y-auto`}
  animation: 0.3s ${MoreOptionAnimate};
  &::-webkit-scrollbar-track {
    ${tw`rounded-[10px] bg-transparent`}
  }

  &::-webkit-scrollbar {
    ${tw`w-[5px]`}
  }

  &::-webkit-scrollbar-thumb {
    ${tw`rounded-[50px] bg-tertiary`}
  }
  &::-webkit-scrollbar-thumb:hover {
    ${tw`bg-quaternary`}
  }
  ${({ toggleOption }) => (toggleOption ? tw`right-0` : tw`right-[-320px]`)}
`;

export const RoomInfo = styled.div`
  ${tw`flex flex-col items-center bg-white mb-3`}
`;

export const RoomInfoTitle = styled.div`
  ${tw`font-semibold py-3 text-[22px] border-b-[1px] w-full text-center border-b-quaternary`}
`;

export const RoomInfoAvatar = styled.figure<{ isGroup?: number }>`
  ${tw`relative flex flex-wrap justify-center items-center w-[100px] h-[100px] rounded-full overflow-hidden border border-gray-500 mt-4 mb-2`}
  ${({ isGroup }) => isGroup === 1 && tw`p-1 bg-tertiary`}
`;

export const RoomInfoAvatarGroup = styled.figure`
  ${tw`relative w-[45px] h-[45px] rounded-full overflow-hidden`}
`;

export const RoomInfoNameWrap = styled.div`
  ${tw`relative flex items-center text-[20px] font-semibold`}
`;

export const RoomInfoName = styled.div`
  ${tw`whitespace-nowrap overflow-ellipsis overflow-hidden`}
`;

export const RoomInfoNameEditIcon = styled(AiOutlineEdit)`
  ${tw`absolute right[-30px] bg-tertiary rounded-full p-[2px] text-[23px] hover:cursor-pointer hover:opacity-80`}
`;

export const OptionItem = styled.div<{ color?: string }>`
  ${tw`text-base px-3 -mx-3 py-2 rounded-[5px] cursor-pointer duration-200`}
`;

export const NormalItem = styled(OptionItem)`
  ${tw`hover:bg-tertiary flex`}
`;

export const DeleteItem = styled(OptionItem)`
  ${tw`text-red-500 hover:bg-red-100`}
`;

export const OptionWrap = styled.div`
  ${tw``}
`;

export const WhiteBox = styled.div`
  ${tw`bg-white mb-3`}
`;

export const Title = styled.p`
  ${tw`font-semibold text-lg flex justify-between items-center cursor-pointer my-0.5`}
`;

export const ExtendContent = styled.div`
  ${tw`relative flex flex-col justify-between overflow-hidden`}
`;

export const FileWrap = styled.div<{ wraptype?: string; visible: boolean }>`
  ${({ wraptype }) =>
    wraptype === 'file' ? tw`flex flex-col` : tw`grid grid-cols-3`}
  ${({ visible }) => (visible ? tw`h-full` : tw`h-0`)}
  ${tw`gap-1`}
`;

export const UploadedMedia = styled.figure`
  ${tw`relative mx-1 rounded-[5px] cursor-pointer overflow-hidden`}
  aspect-ratio: 1;
`;

export const MoreButton = styled.button`
  ${tw`text-sm px-3 py-2 w-full rounded-[5px] cursor-pointer duration-200 bg-secondary font-semibold my-2`}
`;

export const FilePreview = styled.a`
  ${tw`relative flex items-center h-[50px] pl-1.5 pr-3.5 py-1 bg-primary rounded-[5px] shadow-md`}
`;

export const FilePreviewIcon = styled.div`
  ${tw`flex items-center justify-center p-1.5 bg-secondary rounded-full`}
`;

export const FilePreviewName = styled.div`
  ${tw`ml-1.5 w-full text-[16px] font-semibold text-quaternary whitespace-nowrap overflow-ellipsis overflow-hidden`}
`;
