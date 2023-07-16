export const withLoading = Component => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component {...props} />;
    }
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  };
};
