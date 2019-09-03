
import { User } from '../../models/user';
export interface IUserState {
    users: User[] | null,
    selectedUser: User | null
}
export const initialUserState : IUserState = {
    users: null,
    selectedUser: null
}