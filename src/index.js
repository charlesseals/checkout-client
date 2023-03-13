import React from 'react';
import { createRoot } from "react-dom/client"
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Checkout } from "./Checkout";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <Checkout />
    </BrowserRouter>
)
