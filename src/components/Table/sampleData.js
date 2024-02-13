export const sampleOptions = [
  {
    id: 1,
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    status: true,
    date: new Date('2022-01-01')
  },
  {
    id: 2,
    name: 'Jane Doe',
    phoneNumber: '098-765-4321',
    status: false,
    date: new Date('2022-02-01')
  },
  {
    id: 3,
    name: 'Jim Beam',
    phoneNumber: '555-555-5555',
    status: true,
    date: new Date('2022-03-01')
  }
]

export const initialFormState = {
  id: null,
  name: '',
  phoneNumber: '',
  status: false,
  date: new Date(),
  autocomplete: null
}
