import { useState,useEffect } from "react";

const Options = ({setInfoFromOptions}) => {
    const [dishType, setDishType] = useState("");
    const [typeOfFood, setTypeOfFood] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [fastFoodType, setFastFoodType] = useState("");
    const [bonusIngredients, setBonusIngredients] = useState("");
    const [banIngredients, setBanIngredients] = useState("");

    const sendInfoOptions = () => {
        setInfoFromOptions(`dishType: ${dishType}, type of food: ${typeOfFood}, cuisine: ${cuisine}, fastFood type: ${fastFoodType}, bonus ingredients: ${bonusIngredients}, banIngredients: ${banIngredients}`)
    }

    useEffect(()=>{
        sendInfoOptions();
    }, [dishType, typeOfFood, cuisine, fastFoodType, banIngredients, bonusIngredients])

    return (
        <div className="mx-auto p-4 mt-4 bg-emerald-100 w-[90%] xl:w-[70%] mb-10 border-2 border-black  rounded-3xl flex flex-col items-center">
            <div className="text-3xl font-bold">Options</div>
            <p>Lorem, ipsum dolor.</p>

            <div className="flex gap-10 mt-10 flex-wrap">
                <div>
                    <div className="flex flex-col">
                        <label>Select dish you want to cook</label>
                        <select
                            name="dish"
                            id="dish"
                            onChange={(e) => setDishType(e.target.value)}
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2"
                        >
                            <option value="Завтрак">Завтрак</option>
                            <option value="Обед">Обед</option>
                            <option value="Ужин">Ужин</option>
                            <option value="Перекус">перекус</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label>World cuisine</label>
                        <select
                            name="cuisine"
                            id="cuisine"
                            onChange={(e) => setCuisine(e.target.value)}
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2"
                        >
                            <option value="Азиатская кухня">
                                Азиатская кухня
                            </option>
                            <option value="Итальянская кухня">
                                Итальянская кухня
                            </option>
                            <option value="Европейская кухня">
                                Евопейская кухня
                            </option>
                            <option value="Американская кухня">
                                Американская кухня
                            </option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Type of Food</p>
                        <select className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2">
                            <option>Вегетарианская</option>
                            <option>Полезная</option>
                            <option>Жирная</option>
                            <option>Супы</option>
                        </select>
                    </div>

                    <div>
                        <p>Fast Food</p>
                        <select
                            onChange={(e) => setFastFoodType(e.target.value)}
                            className="pl-1 w-[200px] h-[35px] rounded-3xl border-black border-2"
                        >
                            <option>Пицца</option>
                            <option>Бургер</option>
                            <option>Донер</option>
                            <option>Крылышки</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Add extra ingredients</p>
                        <input
                            onChange={(e) =>
                                setBonusIngredients(e.target.value)
                            }
                            placeholder="extra ingredients"
                            className="pl-3 w-[200px] h-[35px] rounded-3xl border-2 border-black "
                        />
                    </div>

                    <div>
                        <p>Ban ingredients</p>
                        <input
                            onChange={(e) => setBanIngredients(e.target.value)}
                            placeholder="ban ingredient"
                            className="pl-3 w-[200px] h-[35px] rounded-3xl border-2 border-black "
                        />
                    </div>
                </div>
            </div>





            <div className="flex gap-3 flex-wrap mt-10 w-[80%]">
                <p>selected dish type: <span className="text-orange-500 font-bold">{dishType}</span></p>
                <p>selected cuisine: <span className="text-orange-500 font-bold">{cuisine}</span></p>
                <p>selected fastFoodType: <span className="text-orange-500 font-bold">{fastFoodType}</span></p>
                <p>selected typeOfFood: <span className="text-orange-500 font-bold">{typeOfFood}</span></p>
                <p>selected bonusIngredients: <span className="text-orange-500 font-bold">{bonusIngredients}</span></p>
                <p>selected banIngredients: <span className="text-orange-500 font-bold">{banIngredients}</span></p>
            </div>
        </div>
    );
};

export default Options;
