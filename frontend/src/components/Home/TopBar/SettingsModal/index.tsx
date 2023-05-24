import { useEffect, useState } from 'react';
import ChangePassword from './ChangePassword';
import * as S from './SettingsModal.styled';
import { Modal, Tabs, TabsProps } from 'antd';
import { TabsPosition } from 'antd/es/tabs';

export const settingsModalData = [
  { name: 'changePassword', title: 'Change Password' },
  { name: 'general', title: 'General Settings' },
];

interface SettingsModalProps {
  onClose: () => void;
  open: boolean;
}

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Security`,
    children: <ChangePassword />,
  },
  {
    key: '2',
    label: `General`,
    children: `Content of Tab Pane 2`,
  },
];
const SettingsModal = ({ onClose, open }: SettingsModalProps) => {
  const [tabPosition, setTabPosition] = useState<TabsPosition>('left');

  useEffect(() => {
    if (screen.width > 768) {
      setTabPosition('left');
    } else {
      setTabPosition('top');
    }
  }, [screen.width]);
  return (
    <Modal
      title='Settings'
      open={open}
      onOk={onClose}
      onCancel={onClose}
      okButtonProps={{ style: { display: 'none' } }}
      cancelButtonProps={{ style: { display: 'none' } }}
      cancelText='OK'
      width={1000}
    >
      <Tabs
        defaultActiveKey='1'
        items={items}
        onChange={onChange}
        tabPosition={tabPosition}
      />
      {/* <S.SettingsModalInner>
        <S.SettingTabWrap>
          {settingsModalData.map((it, id) => (
            <S.TabLink
              key={id}
              active={tab === it.name}
              onClick={() => setTab(it.name)}
            >
              {it.title}
            </S.TabLink>
          ))}
        </S.SettingTabWrap>
        <S.SettingContentWrap>
          {tab === 'changePassword' && <ChangePassword />}
        </S.SettingContentWrap>
      </S.SettingsModalInner> */}
    </Modal>
  );
};

export default SettingsModal;
