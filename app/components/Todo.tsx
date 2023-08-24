"use client";

import React, {useEffect, useRef, useState} from 'react'
import {Task} from "@/types";
import {deleteTodo, editTodo} from "@/api";

interface TodoProps {
    todo: Task;
}

export const Todo = ({todo}: TodoProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEditing] = useState(false)
    const [editedTaskTilte, setEditedTaskTitle] = useState(todo.title)

    useEffect(() => {
        if (isEditing) {
            ref.current?.focus()
        }
    }, [isEditing])

    const handleEdit = async () => {
        setIsEditing(true)
    }
    const handleSave = async () => {
        await editTodo(todo.id, editedTaskTilte)
        setIsEditing(false)
    }
    const handleDelete = async () => {
        await deleteTodo(todo.id)
    }

    return (
        <li key={todo.id} className='flex items-center justify-between'>
            {isEditing ? (<input ref={ref}
                                 type="text"
                                 className='w-full border px-4 rounded-lg focus:outline-none focus:border-blue-400'
                                 value={editedTaskTilte}
                                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedTaskTitle(e.target.value)}
                />)

                : (<span className='text-gray-600'>{todo.title}</span>)
            }
            <div>
                {isEditing ? (<button
                    onClick={handleSave}
                    className='px-4 py-2 text-green-500 bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200'
                >Save
                </button>) : (<button
                    onClick={handleEdit}
                    className='px-4 py-2 text-green-500 bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200'
                >Edit
                </button>)}

                <button
                    onClick={handleDelete}
                    className='px-4 py-2 text-white bg-red-500 rounded transform hover:bg-red-400 hover:scale-95 duration-200'>Delete
                </button>
            </div>
        </li>
    )
}

export default Todo