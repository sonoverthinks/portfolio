let components = {};

function ListItem({ children }) {
  return (
    <li className="text-[18px] leading-[29px] md:text-[20px] md:leading-[32px] lg:text-[22px] lg:leading-[34px] text-typo-bistre dark:text-neutral-lavenderGray">
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
