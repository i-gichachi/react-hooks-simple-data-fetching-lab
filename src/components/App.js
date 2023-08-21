import React, {useState, useEffect} from "react";

function App() {

    const [dogImage, setDogImage] = useState ("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setDogImage(data.message)
            setIsLoading(false)
        })
        .catch(error => {
            console.error("Error fetching dog image:", error)
            setIsLoading(false)
        })
    }, [])

    return(
        <div>
            <h1>Random Dog Image</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) :  (
                <img src={dogImage} alt= "A Random Dog " style={{ maxWidth: "100%" }} />
            )}

        </div>
    )
}

export default App
