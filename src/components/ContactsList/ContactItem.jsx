export const ContactItem = ({ children, id, onDeleteContact }) => {
  return (
    <li>
      {children}
      <button onClick={() => onDeleteContact(id)}>Удалить</button>
    </li>
  );
};
