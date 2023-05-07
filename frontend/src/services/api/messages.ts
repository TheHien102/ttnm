import { fileType, messageSendType } from '../../utils/types';
import http from '../http';
import { API_URL } from './urls';

export const CLOUD_NAME = 'vhg2901';
export const API_KEY = '986354319128124';
export const CLOUD_FOLDER_NAME = 'H_C_I';
export const UPLOAD_PRESET = 'upload-preset-hci';

export const MessageApi = {
  send: async function (message: messageSendType): Promise<any> {
    return await http.post(API_URL.sendMessage, message);
  },
  saveFile: async function (files: fileType[]): Promise<any> {
    return await http.post(API_URL.saveFile, { files });
  },
  getFile: async function (roomId: string): Promise<any> {
    return await http.post(API_URL.getFile, { roomId });
  },
  unsend: async function (msgId: string): Promise<any> {
    return await http.put(`${API_URL.unsendMessage}/${msgId}/unsend`);
  },
  delete: async function (msgId: string): Promise<any> {
    return await http.delete(`${API_URL.unsendMessage}/${msgId}/delete`);
  },
  getSignedKey: async function (public_id?: string): Promise<any> {
    return await http.post(API_URL.getSignedKey, { public_id });
  },
  uploadFile: async function (formData: FormData): Promise<any> {
    return await http.post(
      `${API_URL.uploadFile}/${CLOUD_NAME}/auto/upload`,
      formData,
      {
        headers: { 'content-type': 'multipart/form-data' },
      }
    );
  },
};
