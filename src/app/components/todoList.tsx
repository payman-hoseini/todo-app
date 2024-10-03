

export default function TodoList(){
    return (
        <>
            <div className="bg-todo-back mt-5 rounded shadow-xl">
                <ul>
                    <li className="border-b border-b-text-one py-4">
                        <div className="flex items-center justify-between px-5 hover:cursor-pointer group">
                        <div className="flex items-center">
                            <button className="w-6 h-6 bg-todo-back border border-text-one hover:bg-gradient-to-t from-grad1 to-grad2 hover:border-none rounded-full">
                                <p className="w-[22px] h-[22px] bg-todo-back rounded-full mx-auto"></p>
                            </button>
                            <p className="font-Josefin ml-5 text-todo">Todo 1</p>
                        </div>
                        <button className="hidden group-hover:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                        </button>
                        </div>
                    </li>
                </ul>
                <div className="px-4 font-Josefin flex items-center justify-between text-text-two py-3">
                    <div>
                        <p className="text-sm">5 items left</p>
                    </div>
                    <div className="space-x-3 font-bold text-sm">
                        <button className="text-Bright-Blue hover:text-hover">All</button>
                        <button className="hover:text-hover">Active</button>
                        <button className="hover:text-hover">Completed</button>
                    </div>
                    <div>
                        <button className="text-sm hover:text-hover">Clear Completed</button>
                    </div>
                </div>
            </div>
        </>
    )
}