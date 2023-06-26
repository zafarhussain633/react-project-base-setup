const ProtectedLayout = ({children}) => {
  return (
    <>
      <div>navbar</div>
      <div>sidebar</div>
      {children}
    </>
  );
};

export default ProtectedLayout