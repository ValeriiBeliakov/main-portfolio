import Title from "./Title";

const HeroSection = () => {
  return (
    <>
      <div className="absolute top-[50%]">
        <div className="flex flex-col items-start">
          <div className="w-full h-auto md:w-[560px] pc:w-[800px]">
            <h1 className="text-xl pc:text-4xl">
              &mdash;Здравствуйте <br />
              <span className="text-xl font-medium md:text-4xl">
                Я &mdash; Frontend web developer.
              </span>
            </h1>
            <p className="text-lg  md:text-xl pc:text-3xl mt-5  px-auto">
              Страстно желающий развивать свои навыки и создавать все более
              сложные и современные интерфейсы.
            </p>
            <div className="mt-7">
              <a href="#contacts">
                <Title text="Контакты📭" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
