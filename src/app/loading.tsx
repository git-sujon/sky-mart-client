const LoadingPage = () => {
  return (
    <div className="min-h-svh flex items-center justify-center">
      <div className=" absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-100 border-8 size-44 "></div>
      </div>
    </div>
  );
};

export default LoadingPage;
