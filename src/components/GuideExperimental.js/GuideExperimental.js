import { useState } from "react";
import "./GuideExperimental.scss";

function GuideExperimental() {

    const initialState = {
        prompt1: {
            name: "prompt1",
            question: "Are you here for a specific reason?",
        },
        prompt2: {
            name: "prompt2",
            question: "Are you coming with family?",
        },
        prompt3: {
            name: "prompt3",
            question: "Are you traveling for a weekend?",
        },
        prompt4: {
            name: "prompt4",
            question: "Are you interested in upgrades?",
        },
        prompt5: {
            name: "prompt5",
            question: "Are you looking for a unique experience?",
        }
    }

    const [formData, setFormData] = useState(initialState);
    const [count, setCount] = useState(1);

    const handleSurveyChange = (event) => {
        const prev = formData[event.target.name]
        const answer = event.target.value
        setFormData({...formData, [event.target.name]: { ...prev, answer}})
    }
    
    const handleButtonClick = () => {
        setCount(prev => prev + 1)
    }

    if (count >= 6) {
        return (
            <>  
                <div>
                        <h2>{formData.prompt1.question}</h2>
                        <p>{formData.prompt1.answer}</p>
                </div>
                <div>
                        <h2>{formData.prompt2.question}</h2>
                        <p>{formData.prompt2.answer}</p>
                </div>
                <div>
                        <h2>{formData.prompt3.question}</h2>
                        <p>{formData.prompt3.answer}</p>
                </div>
                <div>
                        <h2>{formData.prompt4.question}</h2>
                        <p>{formData.prompt4.answer}</p>
                </div>
                <div>
                        <h2>{formData.prompt5.question}</h2>
                        <p>{formData.prompt5.answer}</p>
                </div>
            </>
        )
    }

    return (
        <div>
                <h2>{formData["prompt" + count].question}</h2>
            <label>
                Yes
                <input className="selections-radio" type="radio" name={formData["prompt" + count].name} onChange={handleSurveyChange} value={"yes"} checked={formData["prompt" + count].answer === "yes"} />
            </label>
            <label>
                No
                <input className="selections-radio" type="radio" name={formData["prompt" + count].name} onChange={handleSurveyChange} value={"no"} checked={formData["prompt" + count].answer === "no"} />
            </label>
            <button onClick={handleButtonClick}>Next</button>
        </div>
    )
}

export default GuideExperimental;