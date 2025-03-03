// Table component
let components = {};

function TableTypography({ className, children }) {
  return (
    <table className={`w-full border-collapse border  ${className}`}>
      {children}
    </table>
  );
}

function TableCellTypography({ className, children }) {
  return <td className={`border px-4 py-2 ${className}`}>{children}</td>;
}

function TableHeaderTypography({ className, children }) {
  return (
    <th
      className={`border px-4 py-2 bg-gray-100 font-bold text-left ${className}`}
    >
      {children}
    </th>
  );
}

components.table = (props) => (
  <TableTypography {...props} className="mt-3 mb-3 border-gray-300" />
);
components.th = (props) => (
  <TableHeaderTypography
    {...props}
    className="border-gray-300 dark:bg-dark-mirage"
  />
);
components.td = (props) => (
  <TableCellTypography {...props} className="border-gray-300" />
);

export default components;
