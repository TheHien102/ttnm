import styled from 'styled-components';
import { Form, Field } from 'formik';
import tw from 'twin.macro';

export const Suggest = styled.span`
  ${tw`text-[26px] font-bold my-6`}
`;

export const NewForm = styled(Form)`
  ${tw`w-4/5`}
`;

export const Input = styled(Field)<{ error: boolean }>`
  ${tw`w-full h-12 outline-none mt-6 py-2 px-4 border-b`}
  ${({ error }) =>
    error === 1 ? tw`border-red-500` : tw`border-solid border-[#0154b1]`};
`;

export const InputPassword = styled.div`
  ${tw`w-full mt-6 flex items-center justify-between relative`}
`;

export const Password = styled(Field)<{ error: boolean }>`
  ${tw`w-full py-2 px-4 h-12 outline-none border-b`}
  ${({ error }) =>
    error === 1 ? tw`border-red-500` : tw`border-solid border-[#0154b1]`};
  ::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;

export const ButtonEye = styled.div`
  ${tw`text-xl py-2 pl-2 cursor-pointer absolute right-0`}
`;

export const Forgot = styled.div`
  ${tw`w-full text-[#d92f2f] italic text-sm mt-6`}
`;

export const Button = styled.button`
  ${tw`w-1/3 h-11 bg-[#0154b1] text-[#fff] block rounded-md py-2 px-4 font-bold mt-11 mb-5 mx-auto hover:opacity-80`}
`;

export const Register = styled.div`
  ${tw`mb-11 text-green-600 italic text-center cursor-pointer flex-col flex`}
`;

export const ErrorMsg = styled.div`
  ${tw`text-red-500 mt-2`}
`;

export const SetWidth = styled.div`
  ${tw`w-full`}
`;
