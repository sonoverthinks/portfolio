let components = {};

function ListItem({ children }) {
  return (
    <li className="sm:text-[15px] sm:leading-[28px] md:text-[16px] md:leading-[30px] lg:text-[17px] lg:leading-[32px] text-typo-bistre dark:text-neutral-lavenderGray">
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
