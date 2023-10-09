function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      <style jsx>{`
        .loader {
          border-top-color: #3498db;
          animation: spinner 1s infinite linear;
        }

        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
