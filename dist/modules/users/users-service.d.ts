import { Repository } from 'typeorm';
import { UserSchema } from './users-schema';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<typeof UserSchema>);
    findUsers(): string;
}
