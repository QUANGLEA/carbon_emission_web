import FinalFooter from "./FinalFooter";
import FinalHeader from "./FinalHeader";
import SummaryCard from "./SummaryCard";

export default function IndividualSummary() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <FinalHeader isBusiness={false} />
      <div className="grid grid-rows-3 h-[85%] overflow-y-auto grid-cols-2 mx-5 gap-x-3 gap-y-3 place-items-center">
        {TITLES.map((title, i) => {
          return <SummaryCard title={title} description={DESCRIPTIONS[i]} />;
        })}
      </div>
      <FinalFooter href="/quiz/questionOne" />
    </div>
  );
}

const TITLES = [
  "Food",
  "Housing",
  "Renewable Energy",
  "Transportation",
  "Reusable Products",
  "Recycle and Compost",
  "Energy-Efficient Practices",
  "Clothing",
];
const DESCRIPTIONS = [
  "Meat consumption is responsible for releasing greenhouse gases such as methane, CO2, and nitrous oxide. These gases contribute to climate change, such as global warming. Other plant-based protein options, such as tempeh or seitan, are great ways of limiting your carbon footprint.",
  "Apartments can be environmentally friendlier than single-family homes. According to the U.S. Energy Information Administration, a single household living in an apartment uses nearly half as much energy as they would in a house due to less energy and water used in property maintenance and more efficient heating/cooling systems.",
  "There are several environmental and economic benefits to using renewable energy. Renewable energy produces no greenhouse gas emissions from fossil fuels and reduces some types of air pollution. It can also diversify energy supply and reducing dependence on imported fuels.",
  "Public transportation is a great way to conserve natural gas. If public transportation isn’t a feasible or accessible option for where you live, carpooling or walking are other great options!",
  "Because single-use plastic is produced from fossil fuels, the process of extracting and creating these plastics emits huge amounts of greenhouse gases. It is estimated that just the extraction of these fossil fuels and their transportation to plastic factories emits 12.5 to 1.5 million metric tons of greenhouse gasses.",
  "Recycling reduces the amount of waste sent to landfills and incinerators. It conserves natural resources such as timber, water and minerals, prevents pollution by reducing the need to collect new raw materials, and saves energy.",
  "Try to use energy-saving CFL or LED bulbs, which reduce your lighting energy by around 25-35 percent. Incandescent bulbs are especially high consumers of energy, so keep them on for as long as necessary and turn them off when not in use.",
  "Synthetic textile fibers are produced from fossil fuel resources, such as oil and natural gas. Their production, consumption, and related waste handling generate greenhouse gas emissions, use non-renewable resources, and can release microplastics. Additionally, synthetic textile fibers, unlike natural fibers like cotton, don't decompose easily.",
];
