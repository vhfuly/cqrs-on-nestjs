import { User } from '@src/users/models/user.model';

export class NewUserEvent {
  constructor(public readonly user: User) {}
}