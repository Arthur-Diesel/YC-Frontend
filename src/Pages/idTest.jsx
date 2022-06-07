import React from 'react'
import { useParams } from "react-router-dom"

export function IdTest() {
    const { id } = useParams()
    return <h1>{id}</h1>
}