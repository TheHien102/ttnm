import * as S from './NotiModal.styled';
import * as React from 'react';
import Image from 'next/image';

interface INotiModal {
  listNoti: any;
  friendAccept: (notificationId: string, uid: string, nickname: string) => void;
  friendDecline: (notificationId: string) => void;
}

const NotiModal = ({ listNoti, friendAccept, friendDecline }: INotiModal) => {

  return (
    // <S.Noti ref={NotiRef}>
    // <S.NotiTitles>Friend Requests</S.NotiTitles>
    listNoti.length > 0 ? (
      <S.NotiList>
        {listNoti.map((data: any, index: number) => (
          <S.NotiItem key={index}>
            <S.NotiInfo>
              <S.NotiAvatar>
                <Image
                  src={data.avatar}
                  alt="avatar"
                  layout="fill"
                  objectFit="cover"
                />
              </S.NotiAvatar>
              <S.NotiNameWrapper>
                <S.NotiName>{data.name}</S.NotiName>
                {/* <S.NotiNumFriend>{`${data.numFriends} Friends`}</S.NotiNumFriend> */}
              </S.NotiNameWrapper>
            </S.NotiInfo>
            <S.NotiAccept
              onClick={() => friendAccept(data._id, data.uid, data.name)}
            >
              Accept
            </S.NotiAccept>
            <S.NotiDecline onClick={() => friendDecline(data._id)}>
              Decline
            </S.NotiDecline>
          </S.NotiItem>
        ))}
      </S.NotiList>
    ) : (
      <S.NotiText>You don&apos;t have any friend requests</S.NotiText>
    )
  );
};

export default NotiModal;
