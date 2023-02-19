import React, { useState, useEffect } from "react";

export default function Data() {

    const [jokeAll, setJokeAll] = useState({})
    const [joke, setJoke] = useState({
        punchline: "He goes nowhere.",
        setup: "An IPv6 packet is walking out of the house."
    })

    // used two because each time it calls some api and if i didn't store in something then next api call will be done

    useEffect(() => {

        async function jokefun() {
            const res = await fetch("https://official-joke-api.appspot.com/random_joke")
            const jokeData = await res.json()
            setJokeAll(jokeData)
        }

        jokefun();
    }, [jokeAll])

    function getJoke() {
        setJoke(jokeAll)
        console.log(joke);
    }


    const [relaxAll, setRelaxAll] = useState({})
    const [relax, setRelax] = useState({
        type: "education",
        activity: "Learn how to write in shorthand"
    })

    useEffect(() => {

        async function relaxfun() {
            const res = await fetch("https://www.boredapi.com/api/activity")
            const relaxData = await res.json()
            setRelaxAll(relaxData)
        }

        relaxfun();
    }, [relaxAll])

    function getWork() {
        setRelax(relaxAll)
        console.log(relax);
    }

    return (
        <div className="parent">
            <div className="center">
                <button className="btn" onClick={getJoke}> Tell me a Joke</button> <br />

                {joke && <p className="para">Punchline : {joke.punchline} <br /> Setup : {joke.setup}</p>}


                <button className="btn" onClick={getWork}> What to do in free time ? </button>

                {relax && <p className="para">Work type : {relax.type} <br /> Elaborate : {relax.activity}</p>}

            </div>
        </div>
    )
}