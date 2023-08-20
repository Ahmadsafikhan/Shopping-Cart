

// eslint-disable-next-line react/prop-types
const Container = ({ children, className, ...restProps }) => {
  return (
    <div className={`max-w-[1400px] mx-auto ${className || ''}`} {...restProps} >
      {children}
    </div>
  );
};

export default Container;