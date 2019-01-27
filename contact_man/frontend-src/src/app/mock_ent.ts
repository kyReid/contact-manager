import { User } from './entities';

export const MOCK_USER: User = {
  id: "1",
  username: "loginname",
  contacts: [
    { firstname: "bob", mobile_phone: "123456" },
    { firstname: 'Narco', mobile_phone: "12" },
    { mobile_phone: "13", firstname: 'Bombasto' },
    { mobile_phone: "14", firstname: 'Celeritas' },
    { mobile_phone: "15", firstname: 'Magneta' },
    { mobile_phone: "16", firstname: 'RubberMan' },
    { mobile_phone: "17", firstname: 'Dynama' },
    { mobile_phone: "18", firstname: 'Dr IQ' },
    { mobile_phone: "19", firstname: 'Magma' },
    { mobile_phone: "20", firstname: 'Tornado' }
  ]
};
