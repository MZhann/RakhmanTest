import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Options from "./Options";

const Choose = () => {
    
    const apikey = import.meta.env.VITE_API_KEY;
    const apiurl = import.meta.env.VITE_API_URL;
    const [infoFromOptions, setInfoFromOptions] = useState();
    const [generatedText, setGeneratedText] = useState('');
    const [gptPromptText, setGptPromptText] = useState([]);

    const [imageUrl, setImageUrl] = useState('');

    

    const ingredientsData = [
        { name: "Meat", imageSrc: "/images/meat.png" },
        { name: "Apple", imageSrc: "/images/apple.png" },
        { name: "Banana", imageSrc: "/images/banana.png" },
        { name: "Carrot", imageSrc: "/images/carrot.png" },
    ];

    const createPromptText = () => {
        let text = 'Generate breakfast using these ingredients: ' + gptPromptText.toString() + 'other settings:' + infoFromOptions; 
        console.log('promt text: ', text)
        return text;
    }

    const handleIngredientClick = (ingredient) => {
        setGptPromptText([...gptPromptText, ingredient.name]);
    };

    const generateText = async () => {
        let text = 'generate me schedule for training for a week.';
        console.log('started generation of text...');

        try{
            const response = await fetch(apiurl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apikey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: text,
                max_tokens: 350,
            }),
        });
            const data = await response.json();
            console.log('data: ', data);
            setGeneratedText(data.choices[0].text);
        }catch(error){
            console.error(error);
        }
    }

    const generateImage = async (promtText) => {
        console.log('generate image')
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apikey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: promtText,
                n: 1,
                size: "512x512",
            }),
        };

        try {
            const response = await fetch("https://api.openai.com/v1/images/generations", options);
            const data = await response.json();
            console.log('data: ', data);
            setImageUrl(data.data[0].url);
            
            

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap pt-[120px]">
                {ingredientsData.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        imageSrc={ingredient.imageSrc}
                        onClick={() => handleIngredientClick(ingredient)}
                    />
                ))}
                <div>
                    <h3>Selected Ingredients:</h3>
                    <ul>
                        {gptPromptText.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={() => generateText()}
                    className="px-4 h-[50px] m-4 rounded-2xl bg-indigo-400"
                >
                    Generate Dish
                </button>
            </div>
            <div className="flex w-full">
                <p className="text-green-400 text-xl">infoFromOptions: {infoFromOptions}</p>
                <Options setInfoFromOptions={setInfoFromOptions} />
                <div>
                    generated text: 
                    {generatedText}
                </div>
                <div>
                    <p>Generated image will be here:</p>
                    <img src={imageUrl} width={200} height={200} className="bg-emerald-200 rounded-2xl border-2 border-black w-[300px] h-[300px] mr-10 mb-10" alt="generated image will be pasted here" />
                </div>


            </div>
        </div>
    );
};

export default Choose;
