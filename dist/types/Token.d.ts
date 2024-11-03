export interface Token {
    ldap: string;
    email: string;
    attributes: {
        fullName: string;
    };
}
