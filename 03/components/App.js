// ./src/components/App.js
import React from "react";
import Box from "./Box";
import Div from "./Div";
import {ColorContext, TextContext} from './context.js'

const App = () => {
    const {Provider} = ColorContext
    const {Consumer: TextConsumer} = TextContext
    return(
        <section>
            <Box />
            <Div />
        </section>
    )
};

export default App;
