import styled from 'styled-components';
import tw from 'twin.macro';

export const Welcome = styled.div<{ home?: boolean }>`
  ${tw`flex justify-center`}
  ${({ home }) => home && tw`m-auto`}
`;

export const WelcomeContent = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`;

export const WelcomeText = styled.div`
  ${tw`flex items-center text-2xl italic`}
`;

export const WelcomeLogo = styled.figure`
  ${tw`ml-2.5`}
`;

export const WelcomeFeature = styled.div`
  ${tw`flex flex-col items-center mt-[25px]`}
  @media only screen and (max-width: 1024px) {
    ${tw`mt-0 mb-4`}
  }
`;

export const WelcomeFeatureImage = styled.figure<{ home?: boolean }>`
  ${tw`max-w-[400px] w-full mb-5`}
  @media only screen and (max-width: 1024px) {
    ${({ home }) => !home && tw`hidden`}
  }
`;

export const WelcomeFeatureDescription = styled.div`
  ${tw`mb-3.5 text-[#0154B3] text-xl font-semibold text-center`}
`;

export const WelcomeFeatureDetail = styled.div``;
