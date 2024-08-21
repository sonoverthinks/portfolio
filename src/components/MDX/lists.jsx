let components = {};

function ListItem({ children }) {
  return (
    <li className="text-[17px] leading-[32px] text-light-charcoal dark:text-neutral-whisper">
      {children}
    </li>
  );
}

function UnorderedList({ children }) {
  return <ul className="list-disc list-inside">{children}</ul>;
}
function OrderedList({ children }) {
  return (
    <ul className="list-decimal list-inside divide-y divide-slate-100">
      {children}
    </ul>
  );
}

components.ul = (props) => {
  return <UnorderedList {...props} />;
};
components.ol = (props) => {
  return <OrderedList {...props} />;
};
components.li = (props) => {
  return <ListItem {...props} />;
};

export default components;
