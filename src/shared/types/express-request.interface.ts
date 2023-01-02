// Packages
import { Request } from 'express';
// Entities
import { User } from '../../domains/user/entities/user.entity';

export interface IExpressRequest extends Request {
  user?: User;
}
