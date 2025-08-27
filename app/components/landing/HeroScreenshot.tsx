const HeroScreenshot = () => {
  return (
    <div className="relative z-20 -mt-32 sm:-mt-32 lg:-mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <img
          src="/landing/desktop.png"
          alt="Rainbox Desktop App Screenshot"
          className="mx-auto h-auto w-full rounded-t-lg sm:rounded-t-xl border-x border-t border-black/5 shadow-2xl shadow-black/25 transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export default HeroScreenshot;
