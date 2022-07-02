// sortContacts

const sortContacts = (contacts, isAsc) => {
  if (!Array.isArray(contacts)) return null;
  const result = [...contacts];
  if (isAsc === true || isAsc === undefined) result.sort((a, b) => a.name.localeCompare(b.name));
  else result.sort((a, b) => b.name.localeCompare(a.name));
  return result;
};

const contactsArr = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Stepan',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

console.log(sortContacts(11, true));
console.log(sortContacts(contactsArr, true));
console.log(sortContacts(contactsArr, false));
// 'a'charCodeAt(0);
