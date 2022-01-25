const logos = ["spotify", "bbc", "jpmorgan", "ccep", "mancity", "sky"];

export default function Logos() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-800">
          Some of the companies I worked with
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {logos.map((logo, idx) => {
            return (
              <div
                className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
                key={idx}
              >
                <img
                  className="h-24 w-24 grayscale bg-none"
                  src={`/logos/${logo}.svg`}
                  alt={logo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
