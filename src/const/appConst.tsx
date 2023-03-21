export type RoomType = {
  createAt: any;
  desc: string;
  id: string;
  name: string;
  members: [];
};
export type AppContextType = {
  rooms: object;
  isAddRoomShow: boolean;
  setIsAddRoomShow: (c: boolean) => void;
  isInviteMember: boolean;
  setIsInviteMember: boolean;
  selectedRoomId: string;
  setSelectedRoomId: string;
  selectedRoom: string;
  members: [];
};
export type User = {
  uid: string;
  photoURL?: string;
  displayName: string;
};
export type AuthContextType = {
  user: User;
};
export type Mes = {
  createdAt?: string;
  displayName: string;
  id: string;
  photoURL?: string;
  roomId: string;
  text: string;
  uid: string;
};

export type Member = {
  uid: string;
  id: string;
  photoURL?: string;
  providerId: string;
  email: string;
  displayName: string;
  createdAt?: string;
  keywords: [];
};
