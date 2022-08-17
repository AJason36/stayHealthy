import FoodData from './ListData.json'
const CardFood = (props) => {
    return ( 
        <div onClick={props.onClick} className="animate-fade transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104 hover:bg-green-500 duration-300 text-white flex items-center justify-between w-[70vw] md:w-[30vw] h-[30vw] md:h-[5vw] rounded-[16px] p-6 bg-[#F78155]"> 
            <div>{props.FoodItem}</div>
            <div>{props.Cals_per100grams}</div>
        </div>
    );
}
 
export default CardFood;