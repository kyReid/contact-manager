export class User {
  id: string;
  username: string;
  contacts?: Contact[];
}

export interface Contact {
  firstname?: String;
  lastname?: string;
  email?: string;
  mobile_phone?: string;
  home_phone?: string;
  address?: string;
}
