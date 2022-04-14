import React from 'react'
import {AffairType, deleteAffair} from '../HW2'
import {v1} from "uuid";

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        {_id: v1(), name: 'React', priority: 'high'},
        {_id: v1(), name: 'anime', priority: 'low'},
        {_id: v1(), name: 'games', priority: 'low'},
        {_id: v1(), name: 'work', priority: 'high'},
        {_id: v1(), name: 'html & css', priority: 'middle'},
        {_id: v1(), name: 'porn', priority: 'low'},
    ]
})

test('delete 0', () => {
    const newState = deleteAffair(initialState, v1())
    expect(newState.length).toBe(6)
})
test('delete 1', () => {
    const newState = deleteAffair(initialState, v1())
    expect(newState.length).toBe(5)
})
test('delete 3', () => {
    const newState = deleteAffair(initialState, v1())
    expect(newState.length).toBe(5)
})
test('delete 6', () => {
    const newState = deleteAffair(initialState, v1())
    expect(newState.length).toBe(5)
})
test('delete 7', () => {
    const newState = deleteAffair(initialState, v1())
    expect(newState.length).toBe(6)
})
