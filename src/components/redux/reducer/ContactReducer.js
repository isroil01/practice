const initial = [
  {
    id: 0,
    name: "Jasur",
    email: "s@g.com",
    number: "1234556",
  },
  {
    id: 1,
    name: "Yusuf",
    email: "y@g.com",
    number: "8124346",
  },
];

const contactReducer = (state = initial, action) => {
  switch (action.type) {
    case "ADD":
      state = [...state, action.payload];
      return state;
    case "Update":
      const update = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = update;
      return state;
    case 'Delete':
        const data = state.filter(item =>item.id !== action.id)
        state = data;
        return state;
    default:
      return state;
  }
};
export default contactReducer;
