import styled from 'styled-components';
import tw from 'twin.macro';
import { MdGroup, MdGroupAdd } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

export const Wrapper = styled.div`
  ${tw`flex flex-row -mx-1`}
`;

export const Button = styled.div`
  ${tw`hover:cursor-pointer bg-secondary rounded-[10px] shadow-md w-full mx-1`}
`;

export const Options = styled.div`
  ${tw`flex justify-center items-center text-quaternary text-[16px] font-semibold py-2`}
`;

export const AddGroupOption = styled(MdGroupAdd)`
  ${tw`hover:opacity-80 text-[24px] mx-2`}
`;

export const FriendsOption = styled(HiUserGroup)`
  ${tw`hover:opacity-80 text-[24px] mx-2`}
`;
