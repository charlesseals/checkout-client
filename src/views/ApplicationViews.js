import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { PropertiesList } from "../components/properties/PropertiesList"
import { SingleProperty } from "../components/properties/SingleProperty"
import { CleaningList } from "../components/cleaning/CleaningList"
import { SuggesterList } from "../components/suggester/SuggesterList"
import { Welcome } from "../components/welcome/Welcome"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/properties" element={<PropertiesList />} />
            <Route path="/properties/:propertyId" element={<SingleProperty />} />
            <Route path="/suggester" element={<SuggesterList />} />
            <Route path="/cleaning" element={<CleaningList />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Welcome />} />
            </Route>
        </Routes>
    </>
}