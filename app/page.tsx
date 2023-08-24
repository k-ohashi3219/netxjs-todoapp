import Image from 'next/image'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import {getAllTodos} from "@/api";
import todoList from "./components/TodoList"


export default async function Home() {
    const todos = await getAllTodos()
    console.log(todos)

    return <main className="flex flex-col justify-center py-2 bg-amber-100">
        <h1 className='text-4xl font-bold text-gray-600'>todoApp</h1>
        <div className='w-full max-w-xl items-center'>
            <div className='w-full px-8 py-6 bg-white shadow-md rounded-b-md'>
                <AddTask/>
                <TodoList todos={todos}/>


            </div>
        </div>
    </main>
}
