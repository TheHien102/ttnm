import styled from 'styled-components';
import tw from 'twin.macro';

export const ChangePassword = styled.div`
  ${tw`p-4 rounded-[10px]`}
`;

export const Form = styled.form`
  ${tw`flex flex-col`}
`;

export const Title = styled.p`
  ${tw`text-xl font-bold mb-[30px]`}
`;

export const Input = styled.input`
  ${tw`border-b-[1px] border-b-quaternary outline-none text-base px-[10px] py-[5px] w-full text-gray-500 relative z-10 bg-transparent`}
`;

export const InputWrap = styled.div`
  ${tw`inline-block w-[80%] mb-5 relative ml-[10px]`}
`;

export const Label = styled.label<{ active: boolean }>`
  ${tw`text-base text-blue-500 absolute top-[10px] left-[10px] opacity-50 duration-300`}
  ${({ active }) => active && tw`top-[-10px] left-0 opacity-100 text-xs z-0`}
`;

export const ErrorMsg = styled.div`
  ${tw`text-xs text-red-500 text-right mb-2`}
`;

export const Button = styled.button`
  ${tw`shadow text-center text-white bg-tertiary rounded-[10px] text-base font-semibold cursor-pointer hover:bg-quaternary hover:text-white px-5 py-[7px] mb-[10px] duration-100`}
`;

export const ButtonWrap = styled.div`
  ${tw`flex justify-end w-[100%]`}
`;
