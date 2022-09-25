import FinalFooter from "./FinalFooter";
import FinalHeader from "./FinalHeader";
import SummaryCard from "./SummaryCard";

export default function BusinessSummary() {
  return (
    <div className="w-screen h-screen">
      <FinalHeader className="h-[10%]" isBusiness={true} />
      <div className="absolute grid h-[80%] scrollbar-hide grid-cols-2 mx-5 gap-x-3 gap-y-3 place-items-center summaryContainer ">
        {TITLES.map((title, i) => {
          return <SummaryCard title={title} description={DESCRIPTIONS[i]} />;
        })}
      </div>
      <FinalFooter href="/quizBusiness/questionOne" />
    </div>
  );
}

const TITLES = [
  "Transportation",
  "Energy",
  "Office Facilities",
  "Work Environment",
  "Supply Chain",
];
const DESCRIPTIONS = [
  "On a per-passenger basis, private jets emit anywhere from 5-14 times more CO2 than commercial airlines. On average, chartering a private jet also costs 3 times more per passenger than flying first class, and up to 5-10 times that of business and economy. So not only would the elimination of private jets in your corporation cut emissions, it would also significantly cut costs.",
  "According to the Department of Energy, the average number of kilowatt hours per square foot of an office building is 22.5. STAR-approved energy efficient lighting and appliances can help reduce energy consumption by almost half.",
  "Manufacturing certain goods accounts for almost the entirety of the carbon emissions they're responsible for. As a result, buying used office equipment still in great condition can be a great way to reduce your company's carbon footprint.",
  "Allowing employees to work from home, either part time or full time, reduces the carbon emissions from powering the office, transportation, and any painstaking preparation the employee may need to take before heading into work.",
  "According to the Department of Energy, between 40 and 60 percent of manufacturing companies' carbon emissions come from their supply chain. A simple audit of energy efficiency and holding the supply chain accountable for utilizing renewable energy when possible as well as limited energy wastage yielded potential savings of up to $1.1 million per year, per manufacturing plant in the U.S. ",
];
