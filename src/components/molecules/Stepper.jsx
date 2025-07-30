const Stepper = ({ step, total }) => {
  return (
    <div className="flex justify-center mb-8 space-x-4">
      {Array.from({ length: total }).map((_, idx) => {
        const num = idx + 1;
        return (
          <div
            key={num}
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-semibold
              ${
                step === num
                  ? "bg-[#36e2ae] text-[#20242c] border-[#36e2ae] shadow-lg"
                  : "text-gray-400 border-[#363a43] bg-[#282b36]"
              }`}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
