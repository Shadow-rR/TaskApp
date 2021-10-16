import React from 'react'

export const Form=({addtodo,onFormChange,onFormSubmit})=>{
    const formChangeHandler=(event)=>{
        onFormChange(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        onFormSubmit()

    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={addtodo} onChange={formChangeHandler} required/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}