"use client";
import stats from "../src/config/stats.json";
import CountUp from "react-countup";


const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            const isString = typeof item.num === "string";
            const numericValue = isString ? parseInt(item.num) : item.num;

            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <div className="text-4xl xl:text-6xl font-extrabold flex items-center">
                  <CountUp end={numericValue} duration={5} delay={2} />
                  {isString && item.num.includes("+") && "+"}
                </div>

                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
